import PageManager from './page-manager';
import { bind, debounce } from 'lodash';
import checkIsGiftCertValid from './common/gift-certificate-validator';
import { createTranslationDictionary } from './common/utils/translations-utils';
import utils from '@bigcommerce/stencil-utils';
import ShippingEstimator from './cart/shipping-estimator';
import { defaultModal, showAlertModal, ModalEvents } from './global/modal';
import CartItemDetails from './common/cart-item-details';
import { graphqlService, getDataFromGraphql } from '../graph-ql-service';
import { getData } from '../api-helper';
import { setLocalStorageWithExpiration, getLocalStorageItem, removeLocalStorageItem } from '../local-storage-manager';
import { getPartyById } from './consultant/parties/parties-helper';
import { getCustomFieldsByProductId } from './common/utils/scentflirt-products';
import { isProductAvailableForSubscription } from './common/utils/product-scentflirt-label';


export default class Cart extends PageManager {
    onReady() {
        this.$modal = null;
        this.$cartPageContent = $('[data-cart]');
        this.$cartContent = $('[data-cart-content]');
        this.$cartMessages = $('[data-cart-status]');
        this.$cartTotals = $('[data-cart-totals]');
        this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
        this.$overlay = $('[data-cart] .loadingOverlay')
            .hide(); // TODO: temporary until roper pulls in his cart components
        this.$activeCartItemId = null;
        this.$activeCartItemBtnAction = null;
        this.graphApiService = graphqlService;
        if ($('#coupon-name')) {
            const couponName = getLocalStorageItem('couponName')?.value;
            $('#coupon-name').text(couponName);
        }

        this.setApplePaySupport();
        this.bindEvents();
        this.checkProductsCountry();
        this.checkPartyCode();
    }

    refreshContentBeforeRedirect() {
        return new Promise(async (resolve) => {
            this.refreshContent(true);
            resolve();
        });
    }
    cartRemoveItemAnotherZoneItem(itemId) {
        return new Promise(async (resolve) => {
            utils.api.cart.itemRemove(itemId, (err, response) => {
                if (response.data.status === 'succeed') {
                    resolve(true);
                } else {
                    resolve(response);
                }
            });
        });
    }

    async removeAllItemsFromAnotherZone(event, products) {
        event.preventDefault();
        this.$overlay.show();
        for (const product of products) {
            // eslint-disable-next-line no-await-in-loop
            const status = await this.cartRemoveItemAnotherZoneItem(product);
            if (status !== true && status.data.errors) {
                this.$overlay.hide();
                showAlertModal(status.data.errors.join('\n'));
            }
        }
        this.refreshContentBeforeRedirect()
            .then(() => {
                window.location.href = event.target.href;
            });
    }

    async checkProductsCountry() {
        const params = new URLSearchParams(window.location.search);
        const selectedCountry = params.get('country');
        const $neededButton = $('a.button.button--primary');
        const itemsToRemove = [];
        function getCountry(selector) {
            return selector === 'CAD' ? 'USA' : 'CAD';
        }
        if (selectedCountry
            && selectedCountry !== ''
            && this.context.cartItems
            && this.context.cartItems.length !== 0) {
            this.context.cartItems.forEach(item => {
                const available = item.custom_fields.find(field => field.name === 'availability' && field.value !== selectedCountry);
                if (available && available.id !== undefined) {
                    const $neededElement = $(`#cover-element-${item.product_id}`)[0];
                    const $countryCodeElement = $('.cover-element-country-code');
                    const $cartItemElement = $(`[data-product-id="${item.product_id}"]`)[0];
                    $neededElement.classList.add('display-cover-element');
                    $cartItemElement.classList.add('decrease-opacity');
                    $countryCodeElement.text(getCountry(selectedCountry));
                    itemsToRemove.push(item.id);
                }
            });
            this.$overlay.show();
            $neededButton.on('click', event => this.removeAllItemsFromAnotherZone(event, itemsToRemove));
            this.$overlay.hide();
        }
    }

    setApplePaySupport() {
        if (window.ApplePaySession) {
            this.$cartPageContent.addClass('apple-pay-supported');
        }
    }

    cartUpdate($target) {
        const itemId = $target.data('cartItemid');
        this.$activeCartItemId = itemId;
        this.$activeCartItemBtnAction = $target.data('action');

        const $el = $(`#qty-${itemId}`);
        const oldQty = parseInt($el.val(), 10);
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
        const newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
        // Does not quality for min/max quantity
        if (newQty < minQty) {
            return showAlertModal(minError);
        } else if (maxQty > 0 && newQty > maxQty) {
            return showAlertModal(maxError);
        }

        this.$overlay.show();

        utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
            this.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                const remove = (newQty === 0);

                this.refreshContent(remove);
            } else {
                $el.val(oldQty);
                showAlertModal(response.data.errors.join('\n'));
            }
        });
    }

    cartUpdateQtyTextChange($target, preVal = null) {
        const itemId = $target.data('cartItemid');
        const $el = $(`#qty-${itemId}`);
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const oldQty = preVal !== null ? preVal : minQty;
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
        const newQty = parseInt(Number($el.val()), 10);
        let invalidEntry;

        // Does not quality for min/max quantity
        if (!Number.isInteger(newQty)) {
            invalidEntry = $el.val();
            $el.val(oldQty);
            return showAlertModal(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
        } else if (newQty < minQty) {
            $el.val(oldQty);
            return showAlertModal(minError);
        } else if (maxQty > 0 && newQty > maxQty) {
            $el.val(oldQty);
            return showAlertModal(maxError);
        }

        this.$overlay.show();
        utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
            this.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                const remove = (newQty === 0);

                this.refreshContent(remove);
            } else {
                $el.val(oldQty);

                return showAlertModal(response.data.errors.join('\n'));
            }
        });
    }

    cartRemoveItem(itemId) {
        this.$overlay.show();
        utils.api.cart.itemRemove(itemId, (err, response) => {
            if (response.data.status === 'succeed') {
                this.refreshContent(true);
            } else {
                this.$overlay.hide();
                showAlertModal(response.data.errors.join('\n'));
            }
        });
    }

    cartEditOptions(itemId, productId) {
        const context = { productForChangeId: productId, ...this.context };
        const modal = defaultModal();

        if (this.$modal === null) {
            this.$modal = $('#modal');
        }

        const options = {
            template: 'cart/modals/configure-product',
        };

        modal.open();
        this.$modal.find('.modal-content').addClass('hide-content');

        utils.api.productAttributes.configureInCart(itemId, options, (err, response) => {
            modal.updateContent(response.content);
            const optionChangeHandler = () => {
                const $productOptionsContainer = $('[data-product-attributes-wrapper]', this.$modal);
                const modalBodyReservedHeight = $productOptionsContainer.outerHeight();

                if ($productOptionsContainer.length && modalBodyReservedHeight) {
                    $productOptionsContainer.css('height', modalBodyReservedHeight);
                }
            };

            if (this.$modal.hasClass('open')) {
                optionChangeHandler();
            } else {
                this.$modal.one(ModalEvents.opened, optionChangeHandler);
            }

            this.productDetails = new CartItemDetails(this.$modal, context);

            this.bindGiftWrappingForm();
        });

        utils.hooks.on('product-option-change', (event, currentTarget) => {
            const $form = $(currentTarget).find('form');
            const $submit = $('input.button', $form);
            const $messageBox = $('.alertMessageBox');

            utils.api.productAttributes.optionChange(productId, $form.serialize(), (err, result) => {
                const data = result.data || {};

                if (err) {
                    showAlertModal(err);
                    return false;
                }

                if (data.purchasing_message) {
                    $('p.alertBox-message', $messageBox).text(data.purchasing_message);
                    $submit.prop('disabled', true);
                    $messageBox.show();
                } else {
                    $submit.prop('disabled', false);
                    $messageBox.hide();
                }

                if (!data.purchasable || !data.instock) {
                    $submit.prop('disabled', true);
                } else {
                    $submit.prop('disabled', false);
                }
            });
        });
    }

    refreshContent(remove) {
        const $cartItemsRows = $('[data-item-row]', this.$cartContent);
        const $cartPageTitle = $('[data-cart-page-title]');
        const options = {
            template: {
                content: 'cart/content',
                totals: 'cart/totals',
                pageTitle: 'cart/page-title',
                statusMessages: 'cart/status-messages',
                additionalCheckoutButtons: 'cart/additional-checkout-buttons',
            },
        };

        this.$overlay.show();

        // Remove last item from cart? Reload
        if (remove && $cartItemsRows.length === 1) {
            return window.location.reload();
        }

        utils.api.cart.getContent(options, (err, response) => {
            if (response) {
                this.$cartContent.html(response.content);
                this.$cartTotals.html(response.totals);
                this.$cartMessages.html(response.statusMessages);
                this.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);

                $cartPageTitle.replaceWith(response.pageTitle);
            }

            this.bindEvents();
            this.$overlay.hide();
            this.checkProductsCountry();
            const couponName = getLocalStorageItem('couponName').value;
            $('#coupon-name').text(couponName);

            const quantity = $('[data-cart-quantity]', this.$cartContent).data('cartQuantity') || 0;
            const subTotal = $('[data-cart-subTotal]').text().trim().slice(1);

            $('body').trigger('cart-quantity-update', [quantity, subTotal]);

            $(`[data-cart-itemid='${this.$activeCartItemId}']`, this.$cartContent)
                .filter(`[data-action='${this.$activeCartItemBtnAction}']`)
                .trigger('focus');
        });
    }

    async getCouponData(couponCode) {
        const { aws_url } = this.context.themeSetting;

        const aws = `${aws_url}bc/coupons?couponCode=${couponCode}`;
        const response = await getData(aws);
        setLocalStorageWithExpiration('couponName', response[0].name, 365 * 24 * 60 * 60 * 1000);
    }

    bindCartEvents() {
        const debounceTimeout = 400;
        const cartUpdate = bind(debounce(this.cartUpdate, debounceTimeout), this);
        const cartUpdateQtyTextChange = bind(debounce(this.cartUpdateQtyTextChange, debounceTimeout), this);
        const cartRemoveItem = bind(debounce(this.cartRemoveItem, debounceTimeout), this);
        const removeScentflirtItems = bind(debounce(this.removeScentflirtItems, debounceTimeout), this);

        let preVal;

        // cart update
        $('[data-cart-update]', this.$cartContent).on('click', event => {
            const $target = $(event.currentTarget);

            event.preventDefault();

            // update cart quantity
            cartUpdate($target);
        });

        // cart qty manually updates
        $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
            preVal = this.value;
        }).change(event => {
            const $target = $(event.currentTarget);
            event.preventDefault();

            // update cart quantity
            cartUpdateQtyTextChange($target, preVal);
        });

        const { subscription_products_ids } = this.context;

        $('.cart-remove', this.$cartContent).on('click', event => {
            const itemId = $(event.currentTarget).data('cartItemid');
            const string = $(event.currentTarget).data('confirmDelete');
            const productId = $(event.currentTarget).data('productId');

            showAlertModal(string, {
                icon: 'warning',
                showCancelButton: true,
                onConfirm: () => {
                    if (subscription_products_ids.includes(productId)) {
                        removeLocalStorageItem('cartFromJoinProcess');
                        removeScentflirtItems(productId);
                    } else {
                        cartRemoveItem(itemId);
                    }
                },
            });
            event.preventDefault();
        });

        $('[data-item-edit]', this.$cartContent).on('click', event => {
            const itemId = $(event.currentTarget).data('itemEdit');
            const productId = $(event.currentTarget).data('productId');
            event.preventDefault();
            // edit item in cart
            this.cartEditOptions(itemId, productId);
        });
    }

    async removeScentflirtItems(subscriptionId) {
        const { scentflirt_subscriber_type_id } = this.context.themeSetting;
        let isCustomerExclusive = false;

        if (this.context.customer) {
            const customerAttrSubscriberType = await getDataFromGraphql(this.context, 'getCustomerAttr', this.context.storefrontAPIToken, { attributeId: scentflirt_subscriber_type_id });
            const customerSubsValue = customerAttrSubscriberType?.customer?.attributes?.attribute?.value;
            const customerSubsValueSplitted = customerSubsValue?.split(',') || [];
            isCustomerExclusive = customerSubsValueSplitted.includes('exclusive') || customerSubsValueSplitted.includes('preferred');
        }

        const items = $('.cart-item');
        let itemsKeptInCart = 0;
        const removalPromises = [];

        /* eslint-disable no-await-in-loop */
        for (let index = 0; index < items.length; index++) {
            const cartItem = $(items[index]);
            const removeBtn = cartItem.find('.cart-remove');
            const itemId = removeBtn.data('cartItemid');
            const productId = removeBtn.data('productId');
            const customFields = await getCustomFieldsByProductId(this.context, productId);
            const isScentflirtProduct = isProductAvailableForSubscription(customFields);

            if (subscriptionId === productId || (isScentflirtProduct && !isCustomerExclusive)) {
                removalPromises.push(utils.api.cart.itemRemove(itemId));
            } else {
                itemsKeptInCart++;
            }
        }
        /* eslint-enable no-await-in-loop */

        await Promise.all(removalPromises);

        if (itemsKeptInCart > 0) {
            this.refreshContent(true);
        } else {
            window.location.reload();
        }
    }

    bindPromoCodeEvents() {
        const $couponContainer = $('.coupon-code');
        const $couponForm = $('.coupon-form');
        const $codeInput = $('[name="couponcode"]', $couponForm);

        $('.coupon-code-add').on('click', event => {
            event.preventDefault();

            $(event.currentTarget).hide();
            $couponContainer.show();
            $('.coupon-code-cancel').show();
            $codeInput.trigger('focus');
        });

        $('.coupon-code-cancel').on('click', event => {
            event.preventDefault();

            $couponContainer.hide();
            $('.coupon-code-cancel').hide();
            $('.coupon-code-add').show();
        });

        $couponForm.on('submit', event => {
            const code = $codeInput.val();
            event.preventDefault();

            // Empty code
            if (!code) {
                return showAlertModal($codeInput.data('error'));
            }

            utils.api.cart.applyCode(code, (err, response) => {
                if (response.data.status === 'success') {
                    this.refreshContent();
                    this.getCouponData(code);
                } else {
                    showAlertModal(response.data.errors.join('\n'));
                }
            });
        });
    }

    bindPartyCodeEvents() {
        const $partyContainer = $('.party-code');
        const $partyForm = $('.party-form');
        const $codeInput = $('[name="partycode"]', $partyForm);

        $('.party-code-add').on('click', event => {
            event.preventDefault();

            $(event.currentTarget).hide();
            $partyContainer.show();
            $('.party-code-cancel').show();
            $codeInput.trigger('focus');
        });

        $('.party-code-cancel').on('click', event => {
            event.preventDefault();

            $partyContainer.hide();
            $('.party-code-cancel').hide();
            $('.party-code-add').show();
        });

        $partyForm.on('submit', event => {
            const code = $codeInput.val();

            event.preventDefault();

            // Empty code
            if (!code) {
                return showAlertModal($codeInput.data('error'));
            }
        });
    }

    bindGiftCertificateEvents() {
        const $certContainer = $('.gift-certificate-code');
        const $certForm = $('.cart-gift-certificate-form');
        const $certInput = $('[name="certcode"]', $certForm);

        $('.gift-certificate-add').on('click', event => {
            event.preventDefault();
            $(event.currentTarget).toggle();
            $certContainer.toggle();
            $('.gift-certificate-cancel').toggle();
        });

        $('.gift-certificate-cancel').on('click', event => {
            event.preventDefault();
            $certContainer.toggle();
            $('.gift-certificate-add').toggle();
            $('.gift-certificate-cancel').toggle();
        });

        $certForm.on('submit', event => {
            const code = $certInput.val();

            event.preventDefault();

            if (!checkIsGiftCertValid(code)) {
                const validationDictionary = createTranslationDictionary(this.context);
                return showAlertModal(validationDictionary.invalid_gift_certificate);
            }

            utils.api.cart.applyGiftCertificate(code, (err, resp) => {
                if (resp.data.status === 'success') {
                    this.refreshContent();
                } else {
                    showAlertModal(resp.data.errors.join('\n'));
                }
            });
        });
    }

    bindGiftWrappingEvents() {
        const modal = defaultModal();

        $('[data-item-giftwrap]').on('click', event => {
            const itemId = $(event.currentTarget).data('itemGiftwrap');
            const options = {
                template: 'cart/modals/gift-wrapping-form',
            };

            event.preventDefault();

            modal.open();

            utils.api.cart.getItemGiftWrappingOptions(itemId, options, (err, response) => {
                modal.updateContent(response.content);

                this.bindGiftWrappingForm();
            });
        });
    }

    bindGiftWrappingForm() {
        $('.giftWrapping-select').on('change', event => {
            const $select = $(event.currentTarget);
            const id = $select.val();
            const index = $select.data('index');

            if (!id) {
                return;
            }

            const allowMessage = $select.find(`option[value=${id}]`).data('allowMessage');

            $(`.giftWrapping-image-${index}`).hide();
            $(`#giftWrapping-image-${index}-${id}`).show();

            if (allowMessage) {
                $(`#giftWrapping-message-${index}`).show();
            } else {
                $(`#giftWrapping-message-${index}`).hide();
            }
        });

        $('.giftWrapping-select').trigger('change');

        function toggleViews() {
            const value = $('input:radio[name ="giftwraptype"]:checked').val();
            const $singleForm = $('.giftWrapping-single');
            const $multiForm = $('.giftWrapping-multiple');

            if (value === 'same') {
                $singleForm.show();
                $multiForm.hide();
            } else {
                $singleForm.hide();
                $multiForm.show();
            }
        }

        $('[name="giftwraptype"]').on('click', toggleViews);

        toggleViews();
    }

    bindEvents() {
        this.bindCartEvents();
        this.bindPromoCodeEvents();
        // this.bindPartyCodeEvents();
        this.bindGiftWrappingEvents();
        this.bindGiftCertificateEvents();
        this.bindRemoveParty();

        // initiate shipping estimator module
        const shippingErrorMessages = {
            country: this.context.shippingCountryErrorMessage,
            province: this.context.shippingProvinceErrorMessage,
        };
        this.shippingEstimator = new ShippingEstimator($('[data-shipping-estimator]'), shippingErrorMessages);
    }

    checkPartyCode() {
        const id = this.getPartyCodeFromUrl() || this.getPartyCode();
        if (id) {
            $('.party-code-value').text(id);
            $('.party-code-cancel').removeClass('hidden');
        }
    }

    getPartyCodeFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const partyId = urlParams.get('partyId');
        return partyId ? getPartyById(partyId)?.id : null;
    }

    getPartyCode() {
        const currentParty = getLocalStorageItem('current_party');
        return currentParty?.value?.id || null;
    }

    bindRemoveParty() {
        const self = this;
        $('.party-code-cancel').on('click', () => {
            if (self.getPartyCode()) {
                removeLocalStorageItem('current_party');
                $('.party-code-value').text('-');
                $('.party-code-cancel').addClass('hidden');
            }
        });
    }
}
