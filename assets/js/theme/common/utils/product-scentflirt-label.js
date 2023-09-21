import _ from 'lodash';
import { getDataFromGraphql } from '../../../graph-ql-service';
import { getCart } from './scentflirt-products';

export const getLabelValue = (context, productAttr, subscriberType, clubPink) => {
    let response;
    const prdScentflirtAttr = productAttr.find(field => field.name === 'subscriber_type');
    if (!prdScentflirtAttr) {
        return {
            value: '',
            disableButton: false,
        };
    }

    const prdScentflirtAttrValue = prdScentflirtAttr.value;
    const prdSplittedValue = prdScentflirtAttrValue.split(',');

    let label = _.get(context, prdSplittedValue[0]);

    if (!context.customer) {
        response = {
            value: label,
            disableButton: true,
        };
    } else {
        // scentflirt evaluation
        const scentflirtKeys = ['exclusive', 'preferred'];
        const customerSubsValue = subscriberType?.customer?.attributes?.attribute?.value;
        const customerSubsValueSplitted = customerSubsValue?.split(',');

        const scentflirtMatch = scentflirtKeys.find(item => prdSplittedValue.includes(item));
        const firstMatch = prdSplittedValue.find(item => customerSubsValueSplitted?.includes(item));

        label = _.get(context, scentflirtMatch);
        if (firstMatch || (customerSubsValue === 'exclusive' && scentflirtMatch)) {
            return {
                value: label,
                disableButton: false,
            };
        }

        // club pink evaluation
        const clubPinkValue = clubPink?.customer?.attributes?.attribute?.value;
        const isClubPink = _.includes(prdSplittedValue, clubPinkValue);

        label = isClubPink ? _.get(context, clubPinkValue) : _.get(context, prdSplittedValue[0]);

        response = {
            value: label,
            disableButton: !isClubPink,
        };

        return response;
    }

    return response;
};

const getProductAttrFromGraph = async (context, card, token) => {
    const id = card.data('id');
    const product = await getDataFromGraphql(context, 'getProductByIds', token, { ids: [id] });
    const customFields = product?.site?.products?.edges[0]?.node?.customFields?.edges;
    return customFields.map(field => ({
        name: field.node.name,
        value: field.node.value,
    }));
};

const disableAddToCartBtn = ($element, target) => {
    const addToCartButton = $element.find(target);
    addToCartButton.attr('disabled', 'disabled');
    addToCartButton.addClass('disabled-button');
    addToCartButton.off(); // Unbind all events
};

const existsSubscriptionInCart = async (context) => {
    const cart = await getCart(context);
    const subscriptionProductsIDs = context.subscription_products_ids;
    if (!cart || !cart.lineItems) return false;

    const { lineItems: { digitalItems, physicalItems } } = cart;
    const allItems = [...digitalItems, ...physicalItems];

    const subscriptionProducts = allItems.filter(product => subscriptionProductsIDs.includes(product.productId));

    return subscriptionProducts.length > 0;
};

export const isProductAvailableForSubscription = (customFieldsData) => {
    const customField = customFieldsData.find(el => el.name === 'subscriber_type');
    if (!customField) return false;

    const values = customField.value.split(',');

    return values.includes('preferred');
};

const initListLogic = async (context, target) => {
    const container = document.querySelector(target);
    const products = container?.querySelectorAll('.card');
    const productsArray = Array.from(products || []);
    let customerAttrSubscriberType;
    let customerAttrClubPink;

    if (context.customer) {
        const { scentflirt_subscriber_type_id, club_pink_subscriber_id } = context.themeSetting;
        customerAttrSubscriberType = await getDataFromGraphql(context, 'getCustomerAttr', context.storefrontAPIToken, { attributeId: scentflirt_subscriber_type_id });
        customerAttrClubPink = await getDataFromGraphql(context, 'getCustomerAttr', context.storefrontAPIToken, { attributeId: club_pink_subscriber_id });
    }

    /* eslint-disable no-await-in-loop */
    for (let index = 0; index < productsArray.length; index++) {
        const $card = $(productsArray[index]);
        let customFieldsData = $card.data('custom-fields');

        if (!customFieldsData) customFieldsData = await getProductAttrFromGraph(context, $card, context.storefrontAPIToken);

        const hasSubscribeType = customFieldsData.find(el => el.name === 'subscriber_type');
        if (hasSubscribeType) {
            const response = getLabelValue(context, customFieldsData, customerAttrSubscriberType, customerAttrClubPink);
            const { value, disableButton } = response;
            if (!value || !value.length) return;

            $card.find('.scentflirt-badge').css('display', 'block');
            const productTypeValue = $card.find('.product-type-value');
            productTypeValue.text(value);

            const isAvailableForSubscription = isProductAvailableForSubscription(customFieldsData);
            const subscriptionInCart = await existsSubscriptionInCart(context);
            if (!(isAvailableForSubscription && subscriptionInCart) && disableButton) {
                disableAddToCartBtn($card, 'a[data-button-type="add-cart"]');
            }
        }
    }
    /* eslint-enable no-await-in-loop */
};

const initPDPLogic = async (context) => {
    let customerAttrSubscriberType;
    let customerAttrClubPink;

    if (context.customer) {
        const { scentflirt_subscriber_type_id, club_pink_subscriber_id } = context.themeSetting;
        customerAttrSubscriberType = await getDataFromGraphql(context, 'getCustomerAttr', context.storefrontAPIToken, { attributeId: scentflirt_subscriber_type_id });
        customerAttrClubPink = await getDataFromGraphql(context, 'getCustomerAttr', context.storefrontAPIToken, { attributeId: club_pink_subscriber_id });
    }

    const $product = $('.productView');
    const customFieldsData = $product.data('custom-fields');

    if (!customFieldsData?.length) return;

    const response = getLabelValue(context, customFieldsData, customerAttrSubscriberType, customerAttrClubPink);
    const { value, disableButton } = response;

    if (!value || !value.length) return;

    $product.find('.scentflirt-badge').css('display', 'block');
    const productTypeValue = $product.find('.product-type-value');
    productTypeValue.text(value);

    const isAvailableForSubscription = isProductAvailableForSubscription(customFieldsData);
    const subscriptionInCart = await existsSubscriptionInCart(context);
    if (!(isAvailableForSubscription && subscriptionInCart) && disableButton) {
        disableAddToCartBtn($product, '#form-action-addToCart');
    }
};

export async function initScentflirtProductLabels(context, target) {
    if (target) {
        await initListLogic(context, target);
    } else {
        await initPDPLogic(context);
    }
}
