import PageManager from './page-manager';
import _ from 'lodash';
import nod from './common/nod';
import Wishlist from './wishlist';
import validation from './common/form-validation';
import stateCountry from './common/state-country';
import {
    classifyForm,
    Validators,
    announceInputErrorMessage,
    insertStateHiddenField,
    createPasswordValidationErrorTextObject,
} from './common/utils/form-utils';
import { createTranslationDictionary } from './common/utils/translations-utils';
import { creditCardType, storeInstrument, Validators as CCValidators, Formatters as CCFormatters } from './common/payment-method';
import { showAlertModal, defaultModal } from './global/modal';
import compareProducts from './global/compare-products';
import { getData, createData, getData_Post } from '../api-helper';
import { getConsultantFromAttribute } from './consultant/consultant-helper';
import { removeUndesirableCountries } from './custom/remove-undesirable-countries';

export default class Account extends PageManager {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
        this.$state = $('[data-field-type="State"]');
        this.$body = $('body');
    }

    onReady() {
        const $editAccountForm = classifyForm('form[data-edit-account-form]');
        const $addressForm = classifyForm('form[data-address-form]');
        const $inboxForm = classifyForm('form[data-inbox-form]');
        const $accountReturnForm = classifyForm('[data-account-return-form]');
        const $paymentMethodForm = classifyForm('form[data-payment-method-form]');
        const $reorderForm = classifyForm('[data-account-reorder-form]');
        const $invoiceButton = $('[data-print-invoice]');
        const $bigCommerce = window.BigCommerce;
        this.$modal = null;

        compareProducts(this.context);

        if (this.context.template === 'pages/account/orders/all') {
            this.initOrdersShipments(this.context.customer.orders);
        }

        if (this.context.template === 'pages/account/orders/details') {
            this.initOrderDetailsPage(this.context.orderId);
        }

        if (this.context.pageType === 'editaccount') {
            this.initConsultantData(this.context);
        }

        // Injected via template
        this.passwordRequirements = this.context.passwordRequirements;

        // Instantiates wish list JS
        Wishlist.load(this.context);

        if ($editAccountForm.length) {
            this.registerEditAccountValidation($editAccountForm);
            if (this.$state.is('input')) {
                insertStateHiddenField(this.$state);
            }
        }

        if ($invoiceButton.length) {
            $invoiceButton.on('click', () => {
                const left = window.screen.availWidth / 2 - 450;
                const top = window.screen.availHeight / 2 - 320;
                const url = $invoiceButton.data('printInvoice');

                window.open(url, 'orderInvoice', `width=900,height=650,left=${left},top=${top},scrollbars=1`);
            });
        }

        if ($addressForm.length) {
            this.initAddressFormValidation($addressForm);

            if (this.$state.is('input')) {
                insertStateHiddenField(this.$state);
            }
        }

        if ($inboxForm.length) {
            this.registerInboxValidation($inboxForm);
        }

        if ($accountReturnForm.length) {
            this.initAccountReturnFormValidation($accountReturnForm);
        }

        if ($paymentMethodForm.length) {
            this.initPaymentMethodFormValidation($paymentMethodForm);
        }

        if ($reorderForm.length) {
            this.initReorderForm($reorderForm);
        }

        if ($bigCommerce && $bigCommerce.accountPayments) {
            const {
                countries,
                paymentsUrl,
                storeHash,
                storeLocale,
                vaultToken,
                shopperId,
                customerEmail,
                providerId,
                currencyCode,
                paymentMethodsUrl,
                paymentProviderInitializationData,
            } = this.context;

            window.BigCommerce.accountPayments({
                widgetStyles: {
                    base: {
                        color: '#666666',
                        cursor: 'pointer',
                        display: 'block',
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        marginBottom: '0.5rem',
                    },
                    error: {
                        color: 'red',
                    },
                    placeholder: {
                        color: '#d8d8d8',
                    },
                    validated: {
                        color: 'green',
                    },
                },
                initializeData: {
                    countries,
                    paymentsUrl,
                    storeHash,
                    storeLocale,
                    vaultToken,
                    shopperId,
                    customerEmail,
                    providerId,
                    currencyCode,
                    paymentMethodsUrl,
                    paymentProviderInitializationData,
                },
            });
        }

        this.bindDeleteAddress();
        this.bindDeletePaymentMethod();
        this.bindSelectAll();
        this.checkOrderStatus(this.context);
        this.initChangeAddressModal();

        this.aws_url = this.context.themeSetting.aws_url;
        this.aws_cloudfront_url = this.context.themeSetting.aws_cloudfront_url;
        this.orderId = this.getOrderId();

        if (this.orderId) {
            this.getOrderConsultant();
            this.setOrderParty(this.context);
        }

        removeUndesirableCountries('select[data-field-type="Country"]');
    }

    checkOrderStatus(context) {
        const orderStatus = parseInt(context.orderStatus, 10);
        const editConsultant = $('.edit-button--consultant');
        const shippingElement = $('.heading-wrapper');

        if (orderStatus === 11 || (orderStatus >= 7 && orderStatus <= 9)) {
            editConsultant.removeClass('u-hidden');
            $('<button>').html('Edit').addClass('edit-button edit-button--address open-change-address').appendTo(shippingElement);
        }
    }

    async getOrderConsultant() {
        const params = new URLSearchParams(document.location.search);
        const consultantWebsite = params.get('consultant_order');
        await this.setOrderMetafield();

        if (consultantWebsite) {
            const consultant = await getData(`${this.aws_cloudfront_url}getByWebsite?website=${consultantWebsite}`);
            this.consultant = consultant?.rep || null;
            this.updateConsultantMetafield();
        } else if (this.orderMetafield) {
            await this.getConsultantById(this.orderMetafield.consultant_id);
        }
    }

    async setOrderParty(context) {
        const partyElement = $('.definitionList-value.party-value');
        // console.log(partyElement);
        const partyData = await this.getOrderParty(context);

        if (partyData.party_name) {
            partyElement.html(`${partyData.party_name} - partyID: ${partyData.party_id}`);
        } else {
            partyElement.html(partyData.party_id);
        }
    }

    async getOrderParty(context) {
        const orderId = parseInt(this.orderId, 10);
        const body = {
            orderId,
            email: context.customer.email,
        };

        try {
            const aws = `${this.aws_url}bc/orders/metafields/get`;
            const response = await getData_Post(aws, body);

            if (response?.data?.length) {
                return JSON.parse(response.data[0].value);
            }

            return '-';
        } catch (error) {
            // Handle any errors that occur during the API request
            console.error(error);
            showAlertModal(`An error occurred: ${error}`);
        }
    }

    async setOrderMetafield() {
        const { orderId, customer } = this.context;
        const body = {
            email: customer.email,
            orderId,
        };

        const response = await createData(`${this.aws_cloudfront_url}bc/orders/metafields/get`, body);

        if (response?.data && Array.isArray(response.data) && response.data.length) {
            this.orderMetafield = JSON.parse(response.data[0].value);
        }
    }

    async getConsultantById() {
        const consultant = await getData(`${this.aws_cloudfront_url}search?repID=${1}`); // we will need to replace the hardcoded value for the ID
        if (consultant && Array.isArray(consultant)) {
            this.consultant = consultant[0];
            this.enableWebsiteLink();
        }
    }

    async updateConsultantMetafield() {
        if (!this.orderId || !this.consultant?.repID) return;

        const body = {
            consultant_id: this.consultant.repID,
            cartId: this.orderId,
        };

        const action = this.orderMetafield ? 'update' : 'create';

        try {
            const response = await createData(
                `${this.aws_cloudfront_url}bc/orders/metafields/${action}`,
                body,
            );

            if (response?.data?.id) {
                this.enableWebsiteLink();
            } else {
                showAlertModal(response?.data?.message || 'Cannot update the consultant');
                await this.getConsultantById(this.orderMetafield.consultant_id);
            }
        } catch (error) {
            // Handle any errors that occur during the API request
            console.error(error);
            showAlertModal(`An error occurred: ${error}`);
        }
    }

    getOrderId() {
        const params = new URLSearchParams(document.location.search);
        return params.get('order_id');
    }

    enableWebsiteLink() {
        const {
            website,
            first_name,
            last_name,
            repID,
        } = this.consultant;
        const $websiteLink = $('.consultant-value').find('a');
        $websiteLink.attr('href', `/consultant-bio?website=${website}`);
        $websiteLink.html(`${first_name} ${last_name} - repID: ${repID}`);
    }

    initChangeAddressModal() {
        const modal = defaultModal();

        $('.open-change-address').on('click', event => {
            event.preventDefault();

            modal.open();
            modal.updateContent(`<form class="change-address-form">
                <p>Only street address can be changed.</p>
                <div class="input-wrapper">
                    <div id="formField-address1" class="form-field form-field--input form-field--inputText" data-type="AddressLine1">
                        <label class="form-label" for="addressLine1">Address Line 1 *</label>
                        <input class="new-address-input form-input" type="text" id="addressLine1" name="addressLine1" data-label="Address Line 1" aria-required="true" data-field-type="AddressLine1" >
                    </div>
                    <div id="formField-address2" class="form-field form-field--input form-field--inputText" data-type="AddressLine2">
                        <label class="form-label" for="addressLine1">Address Line 2</label>
                        <input class="new-address-input form-input" type="text" id="addressLine2" name="addressLine2" data-label="Address Line 2" aria-required="false" data-field-type="AddressLine2" >
                    </div>
                    <p class="alert-text u-hidden">Address Line 1 cannot be empty</p>
                    <p class="confirmation-text u-hidden">Address changed successfully</p>
                </div>
                <button class="change-address-submit button button--primary" type="submit">
                    Change Address
                </button>
            </form>`);

            $('form .change-address-submit').on('click', ev => {
                ev.preventDefault();
                const addressLine1 = $('#addressLine1').val();
                const addressLine2 = $('#addressLine2').val();
                const alertText = $('.alert-text');

                if (addressLine1 === '') {
                    alertText.removeClass('u-hidden');
                } else {
                    alertText.addClass('u-hidden');
                    this.updateShippingAddress(addressLine1, addressLine2);
                }
            });
        });
    }

    async updateShippingAddress(addressLine1, addressLine2) {
        const body = {
            orderId: this.orderId,
            street1: addressLine1,
            street2: addressLine2,
        };

        try {
            const aws = `${this.aws_url}bc/orders/shippingStreetAddress/update`;
            const response = await getData_Post(aws, body);
            const confirmationText = $('.confirmation-text');

            if (response?.data) {
                confirmationText.removeClass('u-hidden');
                window.location.reload();
            } else {
                showAlertModal(response?.data?.message || 'Cannot update the consultant');
            }
        } catch (error) {
            // Handle any errors that occur during the API request
            console.error(error);
            showAlertModal(`An error occurred: ${error}`);
        }
    }

    bindDeleteAddress() {
        $('[data-delete-address]').on('submit', event => {
            const message = $(event.currentTarget).data('deleteAddress');

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    }

    bindDeletePaymentMethod() {
        $('[data-delete-payment-method]').on('submit', event => {
            const message = $(event.currentTarget).data('deletePaymentMethod');

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    }

    bindSelectAll() {
        $('#select-all-products').on('click', event => {
            const checkboxes = $('.account-product-checkItem .form-checkbox');

            if (event.target.checked) {
                checkboxes.each((i, element) => {
                    element.checked = true;
                });
            } else {
                checkboxes.each((i, element) => {
                    element.checked = false;
                });
            }
        });
    }

    async initConsultantData(context) {
        const idField = $('.consultant-field .id-field');
        const nameField = $('.consultant-field .name-field');
        const phoneField = $('.consultant-field .phone-field');
        const emailField = $('.consultant-field .email-field');

        const data = await getConsultantFromAttribute(context);

        if (data) {
            idField.text(data.repID);
            nameField.text(data.name);
            phoneField.text(data.phone);
            emailField.text(data.email);
        } else {
            idField.text('-');
            nameField.text('-');
            phoneField.text('-');
            emailField.text('-');
        }
    }

    async initOrdersShipments(orders) {
        const trackingNumberEl = $('.order-tracking-number');

        const shipments = orders.map(async (order) => {
            try {
                const response = await this.getOrderShipments(order.id);

                if (response && Array.isArray(response)) {
                    return response.map((shipment) => ({
                        orderId: shipment.order_id,
                        trackingNumber: shipment.tracking_number,
                    }));
                }

                return '-';
            } catch (e) {
                console.log(e);
            }
        });

        if (shipments) {
            const values = await Promise.all(shipments);

            trackingNumberEl.each((i, element) => {
                let trackingText = '';

                if (values[i] && values[i] !== '-') {
                    trackingText = values[i][0].trackingNumber;
                    values[i].forEach((tracking, index) => {
                        if (index) {
                            trackingText = `${trackingText}\n${tracking.trackingNumber}`;
                        } else {
                            trackingText = tracking.trackingNumber;
                        }
                    });
                } else {
                    trackingText = '-';
                }

                $(element).text(trackingText);
            });
        }
    }

    async getOrderShipments(orderId) {
        const { aws_url } = this.context.themeSetting;

        const aws = `${aws_url}bc/orders?orderId=${orderId}`;
        const response = await getData(aws);
        return response;
    }

    initReorderForm($reorderForm) {
        $reorderForm.on('submit', event => {
            const $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
            let submitForm = false;

            $reorderForm.find('[name^="reorderitem"]').remove();

            $productReorderCheckboxes.each((index, productCheckbox) => {
                const productId = $(productCheckbox).val();
                const $input = $('<input>', {
                    type: 'hidden',
                    name: `reorderitem[${productId}]`,
                    value: '1',
                });

                submitForm = true;

                $reorderForm.append($input);
            });

            if (!submitForm) {
                event.preventDefault();
                showAlertModal(this.context.selectItem);
            }
        });
    }

    initAddressFormValidation($addressForm) {
        const validationModel = validation($addressForm, this.context);
        const stateSelector = 'form[data-address-form] [data-field-type="State"]';
        const $stateElement = $(stateSelector);
        const addressValidator = nod({
            submit: 'form[data-address-form] input[type="submit"]',
            tap: announceInputErrorMessage,
        });

        addressValidator.add(validationModel);

        if ($stateElement) {
            let $last;

            // Requests the states for a country with AJAX
            stateCountry($stateElement, this.context, (err, field) => {
                if (err) {
                    throw new Error(err);
                }

                const $field = $(field);

                if (addressValidator.getStatus($stateElement) !== 'undefined') {
                    addressValidator.remove($stateElement);
                }

                if ($last) {
                    addressValidator.remove($last);
                }

                if ($field.is('select')) {
                    $last = field;
                    Validators.setStateCountryValidation(addressValidator, field, this.validationDictionary.field_not_blank);
                } else {
                    Validators.cleanUpStateValidation(field);
                }
            });
        }

        $addressForm.on('submit', event => {
            addressValidator.performCheck();

            if (addressValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }

    initAccountReturnFormValidation($accountReturnForm) {
        const errorMessage = $accountReturnForm.data('accountReturnFormError');

        $accountReturnForm.on('submit', event => {
            let formSubmit = false;

            // Iterate until we find a non-zero value in the dropdown for quantity
            $('[name^="return_qty"]', $accountReturnForm).each((i, ele) => {
                if (parseInt($(ele).val(), 10) !== 0) {
                    formSubmit = true;

                    // Exit out of loop if we found at least one return
                    return true;
                }
            });

            if (formSubmit) {
                return true;
            }

            showAlertModal(errorMessage);

            return event.preventDefault();
        });
    }

    initPaymentMethodFormValidation($paymentMethodForm) {
        // Inject validations into form fields before validation runs
        $paymentMethodForm.find('#first_name.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.firstNameLabel}", "required": true, "maxlength": 0 }`);
        $paymentMethodForm.find('#last_name.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.lastNameLabel}", "required": true, "maxlength": 0 }`);
        $paymentMethodForm.find('#company.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.companyLabel}", "required": false, "maxlength": 0 }`);
        $paymentMethodForm.find('#phone.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.phoneLabel}", "required": false, "maxlength": 0 }`);
        $paymentMethodForm.find('#address1.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.address1Label}", "required": true, "maxlength": 0 }`);
        $paymentMethodForm.find('#address2.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.address2Label}", "required": false, "maxlength": 0 }`);
        $paymentMethodForm.find('#city.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.cityLabel}", "required": true, "maxlength": 0 }`);
        $paymentMethodForm.find('#country.form-field').attr('data-validation', `{ "type": "singleselect", "label": "${this.context.countryLabel}", "required": true, "prefix": "${this.context.chooseCountryLabel}" }`);
        $paymentMethodForm.find('#state.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.stateLabel}", "required": true, "maxlength": 0 }`);
        $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', `{ "type": "singleline", "label": "${this.context.postalCodeLabel}", "required": true, "maxlength": 0 }`);

        const validationModel = validation($paymentMethodForm, this.context);
        const paymentMethodSelector = 'form[data-payment-method-form]';
        const paymentMethodValidator = nod({
            submit: `${paymentMethodSelector} input[type="submit"]`,
            tap: announceInputErrorMessage,
        });
        const $stateElement = $(`${paymentMethodSelector} [data-field-type="State"]`);

        let $last;
        // Requests the states for a country with AJAX
        stateCountry($stateElement, this.context, (err, field) => {
            if (err) {
                throw new Error(err);
            }

            const $field = $(field);

            if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
                paymentMethodValidator.remove($stateElement);
            }

            if ($last) {
                paymentMethodValidator.remove($last);
            }

            if ($field.is('select')) {
                $last = field;
                Validators.setStateCountryValidation(paymentMethodValidator, field, this.validationDictionary.field_not_blank);
            } else {
                Validators.cleanUpStateValidation(field);
            }
        });

        // Use credit card number input listener to highlight credit card type
        let cardType;
        $(`${paymentMethodSelector} input[name="credit_card_number"]`).on('keyup', ({ target }) => {
            cardType = creditCardType(target.value);
            if (cardType) {
                $(`${paymentMethodSelector} img[alt="${cardType}"]`).siblings().css('opacity', '.2');
            } else {
                $(`${paymentMethodSelector} img`).css('opacity', '1');
            }
        });

        // Set of credit card validation
        CCValidators.setCreditCardNumberValidation(paymentMethodValidator, `${paymentMethodSelector} input[name="credit_card_number"]`, this.context.creditCardNumber);
        CCValidators.setExpirationValidation(paymentMethodValidator, `${paymentMethodSelector} input[name="expiration"]`, this.context.expiration);
        CCValidators.setNameOnCardValidation(paymentMethodValidator, `${paymentMethodSelector} input[name="name_on_card"]`, this.context.nameOnCard);
        CCValidators.setCvvValidation(paymentMethodValidator, `${paymentMethodSelector} input[name="cvv"]`, this.context.cvv, () => cardType);

        // Set of credit card format
        CCFormatters.setCreditCardNumberFormat(`${paymentMethodSelector} input[name="credit_card_number"]`);
        CCFormatters.setExpirationFormat(`${paymentMethodSelector} input[name="expiration"]`);

        // Billing address validation
        paymentMethodValidator.add(validationModel);

        $paymentMethodForm.on('submit', event => {
            event.preventDefault();
            // Perform final form validation
            paymentMethodValidator.performCheck();
            if (paymentMethodValidator.areAll('valid')) {
                // Serialize form data and reduce it to object
                const data = _.reduce($paymentMethodForm.serializeArray(), (obj, item) => {
                    const refObj = obj;
                    refObj[item.name] = item.value;
                    return refObj;
                }, {});

                // Assign country and state code
                const country = _.find(this.context.countries, ({ value }) => value === data.country);
                const state = country && _.find(country.states, ({ value }) => value === data.state);
                data.country_code = country ? country.code : data.country;
                data.state_or_province_code = state ? state.code : data.state;

                // Default Instrument
                data.default_instrument = !!data.default_instrument;

                // Store credit card
                storeInstrument(this.context, data, () => {
                    window.location.href = this.context.paymentMethodsUrl;
                }, () => {
                    showAlertModal(this.context.generic_error);
                });
            }
        });
    }

    registerEditAccountValidation($editAccountForm) {
        const validationModel = validation($editAccountForm, this.context);
        const formEditSelector = 'form[data-edit-account-form]';
        const editValidator = nod({
            submit: '${formEditSelector} input[type="submit"]',
            delay: 900,
        });
        const emailSelector = `${formEditSelector} [data-field-type="EmailAddress"]`;
        const $emailElement = $(emailSelector);
        const passwordSelector = `${formEditSelector} [data-field-type="Password"]`;
        const $passwordElement = $(passwordSelector);
        const password2Selector = `${formEditSelector} [data-field-type="ConfirmPassword"]`;
        const $password2Element = $(password2Selector);
        const currentPasswordSelector = `${formEditSelector} [data-field-type="CurrentPassword"]`;
        const $currentPassword = $(currentPasswordSelector);

        // This only handles the custom fields, standard fields are added below
        editValidator.add(validationModel);

        if ($emailElement) {
            editValidator.remove(emailSelector);
            Validators.setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
        }

        if ($passwordElement && $password2Element) {
            const { password: enterPassword, password_match: matchPassword } = this.validationDictionary;
            editValidator.remove(passwordSelector);
            editValidator.remove(password2Selector);
            Validators.setPasswordValidation(
                editValidator,
                passwordSelector,
                password2Selector,
                this.passwordRequirements,
                createPasswordValidationErrorTextObject(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error),
                true,
            );
        }

        if ($currentPassword) {
            editValidator.add({
                selector: currentPasswordSelector,
                validate: (cb, val) => {
                    let result = true;

                    if (val === '' && $passwordElement.val() !== '') {
                        result = false;
                    }

                    cb(result);
                },
                errorMessage: this.context.currentPassword,
            });
        }

        editValidator.add([
            {
                selector: `${formEditSelector} input[name='account_firstname']`,
                validate: (cb, val) => {
                    const result = val.length;

                    cb(result);
                },
                errorMessage: this.context.firstName,
            },
            {
                selector: `${formEditSelector} input[name='account_lastname']`,
                validate: (cb, val) => {
                    const result = val.length;

                    cb(result);
                },
                errorMessage: this.context.lastName,
            },
            {
                selector: `${formEditSelector} input[name='account_phone']`,
                validate: (cb, val) => {
                    const result = val.length;

                    cb(result);
                },
                errorMessage: 'You must enter a phone number.',
            },
        ]);

        $editAccountForm.on('submit', event => {
            editValidator.performCheck();

            if (editValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
            setTimeout(() => {
                const earliestError = $('span.form-inlineMessage:first').prev('input');
                earliestError.focus();
            }, 900);
        });
    }

    registerInboxValidation($inboxForm) {
        const inboxValidator = nod({
            submit: 'form[data-inbox-form] input[type="submit"]',
            delay: 900,
        });

        inboxValidator.add([
            {
                selector: 'form[data-inbox-form] select[name="message_order_id"]',
                validate: (cb, val) => {
                    const result = Number(val) !== 0;

                    cb(result);
                },
                errorMessage: this.context.enterOrderNum,
            },
            {
                selector: 'form[data-inbox-form] input[name="message_subject"]',
                validate: (cb, val) => {
                    const result = val.length;

                    cb(result);
                },
                errorMessage: this.context.enterSubject,
            },
            {
                selector: 'form[data-inbox-form] textarea[name="message_content"]',
                validate: (cb, val) => {
                    const result = val.length;

                    cb(result);
                },
                errorMessage: this.context.enterMessage,
            },
        ]);

        $inboxForm.on('submit', event => {
            inboxValidator.performCheck();

            if (inboxValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();

            setTimeout(() => {
                const earliestError = $('span.form-inlineMessage:first').prev('input');
                earliestError.focus();
            }, 900);
        });
    }

    async initOrderDetailsPage(orderId) {
        const { aws_url } = this.context.themeSetting;
        const response = await getData(`${aws_url}bc/ordersItems?orderId=${orderId}`);

        response.data.forEach(orderItem => {
            const reviewLink = `<a href="${orderItem.url}#write_review"
                class="button button--primary productView-reviewLink productView-reviewLink--new"
                role="button">${this.context.productsReview}</a>`;

            $(`#account-product-${orderItem.order_item_id}`).append(reviewLink);
        });
    }
}
