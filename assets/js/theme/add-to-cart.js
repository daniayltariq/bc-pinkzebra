import { isProductAvailableForSubscription } from './common/utils/product-scentflirt-label';
import { existsKitInCart, getCustomFieldsByProductId, isUnderJoinProcess } from './common/utils/scentflirt-products';
import { showAlertModal } from './global/modal';

const getProductIdFromHref = (href) => {
    const regex = /product_id=(\d+)/;
    const match = href.match(regex);
    if (match && match[1]) {
        return match[1];
    }
    return null;
};

export const addToCart = async (context, callback) => {
    const isJoinProcess = await isUnderJoinProcess(context);

    $('[data-button-type="add-cart"]').on('click', async (e) => {
        if (callback) callback(e);
        const { target: { attributes } } = e;

        const href = attributes['data-href'];
        const id = getProductIdFromHref(href.nodeValue);

        if (!id) return;

        const customFields = await getCustomFieldsByProductId(context, id);
        const isScentflirtProduct = isProductAvailableForSubscription(customFields);

        existsKitInCart(context).then(existsKit => {
            if ((existsKit && !isScentflirtProduct) || isJoinProcess) return showAlertModal('Cannot add items to cart, please checkout or remove the item/s to continue');

            const redirectUrl = href.nodeValue;
            window.location.href = redirectUrl;
        });
    });
};
