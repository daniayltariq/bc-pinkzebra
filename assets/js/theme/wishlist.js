import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';
import nod from './common/nod';
import PageManager from './page-manager';
import { wishlistPaginatorHelper } from './common/utils/pagination-utils';
import { announceInputErrorMessage } from './common/utils/form-utils';
import { getData_Post } from '../api-helper';
import { defaultModal, showAlertModal } from './global/modal';
import { addAvailabilityToProductsCards } from './common/utils/product-availability';
import { copyToClipboard } from '../clipboard';
import { initScentflirtProductLabels } from './common/utils/product-scentflirt-label';

const getShareToCartForm = (context, url) => {
    const { customer: { name, email } } = context;

    const htmlForm = `
    <div class="share-to-cart__wrapper">
        <h1 class="title"> SHARE LOOKBOOK </h1>
        <form action="" data-share-to-cart class="form" method="post">
            <div class="form-field" id="to_name">
                <label class="form-label" for="to_name">
                    TO NAME
                </label>
                <input aria-labelledby="to_name" aria-live="polite" type="text" class="form-input" name="to_name" id="to_name">
            </div>

            <div class="form-field" id="to_email">
                <label class="form-label" for="to_email">
                    TO EMAIL    
                </label>
                <input aria-labelledby="to_email" aria-live="polite" type="text" class="form-input" name="to_email" id="to_email">
            </div>

            <div class="form-field" id="from_name">
                <label class="form-label" for="from_name">
                    FROM NAME
                </label>
                <input aria-labelledby="from_name" aria-live="polite" type="text" class="form-input" name="from_name" id="from_name" value="${name}">
            </div>

            <div class="form-field" id="from_email">
                <label class="form-label" for="from_email">
                    FROM EMAIL
                </label>
                <input aria-labelledby="from_email" aria-live="polite" type="text" class="form-input" name="from_email" id="from_email" value="${email}">
            </div>

            <div class="form-field" id="your_message">
                <label class="form-label" for="your_message">
                    ENTER YOUR MESSAGE
                </label>
                <textarea class="form-input" rows="8" name="your_message" id="your_message">Hi, 
Here is a link to all of the things I think you would love for spring!
${url}
                </textarea>
            </div>

            <div class="form-actions">
                <input class="button button--primary" type="submit" value="SHARE">
            </div>
        </form>
    </div>
    `;

    return htmlForm;
};

export default class WishList extends PageManager {
    constructor(context) {
        super(context);

        this.$aws_url = this.context.themeSetting.aws_url;
        this.$customer_id = this.context.customer?.id;

        this.options = {
            template: 'account/add-wishlist',
        };

        return this;
    }

    /**
     * Creates a confirm box before deleting all wish lists
     */
    wishlistDeleteConfirm() {
        $('body').on('click', '[data-wishlist-delete]', event => {
            const confirmed = window.confirm(this.context.wishlistDelete);

            if (confirmed) {
                return true;
            }

            event.preventDefault();
        });
        $('body').on('click', '[data-lookbook-delete]', async (event) => {
            const confirmed = window.confirm(this.context.lookbookDelete);
            if (confirmed) {
                // if lookbook_id is empty => delete all => backend aws service will wipe out attribute values
                const body = {
                    customer_id: this.$customer_id,
                    lookbook_id: event.target.getAttribute('data-lookbook-delete') || '',
                };

                try {
                    const aws = `${this.$aws_url}bc/customer/lookbook/delete`;
                    await getData_Post(aws, body);
                } catch (error) {
                    console.error(error);
                }
                return true;
            }

            event.preventDefault();
        });
    }

    registerAddWishListValidation($addWishlistForm) {
        this.addWishlistValidator = nod({
            submit: '.wishlist-form input[type="submit"]',
            tap: announceInputErrorMessage,
        });

        this.addWishlistValidator.add([
            {
                selector: '.wishlist-form input[name="wishlistname"]',
                validate: (cb, val) => {
                    const result = val.length > 0;

                    cb(result);
                },
                errorMessage: this.context.enterWishlistNameError,
            },
        ]);

        $addWishlistForm.on('submit', event => {
            this.addWishlistValidator.performCheck();

            if (this.addWishlistValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }

    registerAddLookbookValidation($addLookbookForm) {
        this.addLookbookValidator = nod({
            submit: '.lookbook-form input[type="submit"]',
            tap: announceInputErrorMessage,
        });

        this.addLookbookValidator.add([
            {
                selector: '.lookbook-form input[name="wishlistname"]',
                validate: (cb, val) => {
                    const result = val.length > 0;

                    cb(result);
                },
                errorMessage: this.context.enterLookbookNameError,
            },
        ]);

        $addLookbookForm.on('submit', async (event) => {
            event.preventDefault();
            this.addLookbookValidator.performCheck();

            if (this.addLookbookValidator.areAll('valid')) {
                const body = {
                    customer_id: this.$customer_id,
                    is_public: $('#publicwishlist').is(':checked'),
                    name: $('#wishlistname').val(),
                    items: [],
                };

                try {
                    const aws = `${this.$aws_url}bc/customer/lookbook/add`;
                    await getData_Post(aws, body);

                    window.location.href = `${window.location.origin}/wishlist.php`;
                } catch (error) {
                    // Handle any errors that occur during the API request
                    console.error(error);
                    showAlertModal(`An error occurred: ${error}`);
                }
            }
        });
    }

    initCopyLinkButton() {
        // const linkInput = $('.wishlist-share-link');
        const copyBtn = $('.wishlist-copy-link');

        copyBtn.on('click', () => {
            const linkToCopy = $('.wishlist-share-link').val();

            navigator.clipboard.writeText(linkToCopy);
        });
    }

    onReady() {
        const $addWishListForm = $('.wishlist-form');

        if ($('[data-pagination-wishlist]').length) {
            wishlistPaginatorHelper();
        }

        if ($addWishListForm.length) {
            this.registerAddWishListValidation($addWishListForm);
        }

        this.wishlistDeleteConfirm();

        if (this.context.template === 'pages/account/wishlist-details') {
            this.initCopyLinkButton();
        }

        const $addLookbookForm = $('.add-lookbook-form');
        if ($addLookbookForm.length) {
            this.registerAddLookbookValidation($addLookbookForm);
        }

        addAvailabilityToProductsCards('.productGrid', 'WISHLIST');

        this.verifyAndDisplayShareActions();
        this.bindLookbookActions();
        this.bindAddProductToWishlist();
        initScentflirtProductLabels(this.context, '.productGrid');
    }

    verifyAndDisplayShareActions() {
        const urlParams = new URLSearchParams(window.location.search);

        const wishlistId = urlParams.get('wishlistid');
        const lookbookParam = urlParams.get('lookbook');

        const lookbookPanel = document.querySelector('.lookbook-panel');
        const shareWishlist = document.querySelector('.share-wishlist');

        if (!lookbookPanel || !shareWishlist) return;

        if (wishlistId && lookbookParam === 'true') {
            lookbookPanel.style.display = 'block';
            shareWishlist.style.display = 'none';
        } else {
            lookbookPanel.style.display = 'none';
            shareWishlist.style.display = 'block';
        }
    }

    bindLookbookActions() {
        const context = this.context;
        const modal = defaultModal();

        $('.share-lookbook').on('click', function (event) {
            event.preventDefault();
            const shareUrl = $(this).data('href');
            copyToClipboard(window.location.origin + shareUrl).then(() => {
                console.info('copied to clipboard!');
            });
        });

        $('.share-to-cart-lookbook').on('click', (event) => {
            event.preventDefault();
            const items = context.wishlistItems;
            if (items.length) {
                const productIds = items.reduce((accumulator, currentObject) => {
                    accumulator.push(currentObject.product_id);
                    return accumulator;
                }, []);

                const url = `${window.location.origin}/share-to-cart?ids=${productIds.join(',')}`;

                copyToClipboard(url).then(() => {
                    console.info('copied to clipboard!');
                    modal.open({ size: 'small' });
                    modal.updateContent(getShareToCartForm(context, url));
                });
            } else {
                showAlertModal('Add at least 1 item to this wishlist to share to cart!');
            }
        });
    }

    bindAddProductToWishlist() {
        $('#wishlist-dropdown input[type="submit"]').on('click', function () {
            const formaction = $(this).attr('formaction');
            $('#selected-formaction').val(formaction);
        });

        $('.form-wishlist').on('submit', async event => {
            event.preventDefault();
            const selectedFormAction = $('#selected-formaction').val();

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            };

            const response = await fetch(selectedFormAction, options);

            const isLookbook = selectedFormAction.includes('lookbook');

            if (response.ok) {
                const newUrl = isLookbook ? `${response.url}&lookbook=true` : response.url;
                window.location.href = newUrl;
            }
        });
    }
}
