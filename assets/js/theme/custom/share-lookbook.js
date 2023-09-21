import { getDataFromGraphql } from '../../graph-ql-service';
import { getLabelValue, isProductAvailableForSubscription } from '../common/utils/product-scentflirt-label';
import { existsKitInCart, getCustomFieldsByProductId, isUnderJoinProcess } from '../common/utils/scentflirt-products';
import { showAlertModal } from '../global/modal';
import PageManager from '../page-manager';

export default class ShareLookbook extends PageManager {
    onReady() {
        this.ids = this.getIdsFromUrl();

        if (!this.ids || !this.ids.length) {
            this.handleNoItems();
        } else {
            this.handleItems();
        }
    }

    getIdsFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const idsParam = urlParams.get('ids');

        if (idsParam) {
            return idsParam.split(',');
        }
        return [];
    }

    handleNoItems() {
        const context = this.context;
        showAlertModal('No products to add!', {
            onConfirm() {
                window.location.href = context.urls.cart;
            },
        });
    }

    async handleItems() {
        const errors = [];
        $('.message').text('Processing items...');

        const isJoinProcess = await isUnderJoinProcess(this.context);

        let customerAttrSubscriberType;
        let customerAttrClubPink;

        if (this.context.customer) {
            const { scentflirt_subscriber_type_id, club_pink_subscriber_id } = this.context.themeSetting;
            customerAttrSubscriberType = await getDataFromGraphql(this.context, 'getCustomerAttr', this.context.storefrontAPIToken, { attributeId: scentflirt_subscriber_type_id });
            customerAttrClubPink = await getDataFromGraphql(this.context, 'getCustomerAttr', this.context.storefrontAPIToken, { attributeId: club_pink_subscriber_id });
        }


        if (this.context.cartId && !isJoinProcess) await this.removeCurrentCart(this.context.cartId);

        let url = '/api/storefront/carts';
        let newCartId = '';

        const existsKit = await existsKitInCart(this.context);

        /* eslint-disable no-await-in-loop */
        for (let index = 0; index < this.ids.length; index++) {
            const body = {
                lineItems: [],
                locale: 'en',
            };

            body.lineItems.push({
                quantity: 1,
                productId: parseInt(this.ids[index], 10),
            });

            try {
                const customFields = await getCustomFieldsByProductId(this.context, this.ids[index]);
                const isScentflirtProduct = isProductAvailableForSubscription(customFields);

                const labelValueForScentflirt = getLabelValue(this.context, customFields, customerAttrSubscriberType, customerAttrClubPink);

                const { disableButton } = labelValueForScentflirt;

                if ((existsKit && !isScentflirtProduct) || isJoinProcess || disableButton) {
                    errors.push(this.ids[index]);
                } else {
                    const response = await this.addToCart(body, url);
                    if (response && response.id) {
                        newCartId = response.id;
                        url = `/api/storefront/carts/${newCartId}/items`;
                    }

                    if (response.status === 422) errors.push(this.ids[index]);
                }
            } catch (e) {
                errors.push(this.ids[index]);
            }
        }
        /* eslint-enable no-await-in-loop */
        if (errors.length) {
            $('.message').text(`${errors.length} Items could not be added to cart`);
        } else {
            $('.message').text('Redirecting to cart...');
        }

        window.location.href = this.context.urls.cart;
    }

    async removeCurrentCart(cartId) {
        try {
            const options = { method: 'DELETE', headers: { 'Content-Type': 'application/json' } };
            return fetch(`/api/storefront/carts/${cartId}`, options);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async addToCart(payload, url) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        };

        return fetch(url, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
    }
}
