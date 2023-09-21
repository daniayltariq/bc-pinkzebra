import utils from '@bigcommerce/stencil-utils';
import { getDataFromGraphql } from '../../../graph-ql-service';
import { getLocalStorageItem } from '../../../local-storage-manager';

export const getCart = (context) => new Promise((resolve, reject) => {
    const { cartId } = context;

    if (!cartId) resolve(null);

    utils.api.cart.getCart({ cartId }, (err, response) => {
        if (err) {
            reject(err);
        } else {
            resolve(response);
        }
    });
});

export const existsKitInCart = async (context) => {
    const { scentflirt_ids } = context;
    const cart = await getCart(context);

    if (!cart || !cart.lineItems) return false;

    const { lineItems: { digitalItems, physicalItems } } = cart;
    const allItems = [...digitalItems, ...physicalItems];
    return allItems.some(item => scentflirt_ids.includes(item.productId));
};

export const getCustomFieldsByProductId = async (context, id) => {
    const response = await getDataFromGraphql(context, 'getProductByIds', context.storefrontAPIToken, { ids: [id] });
    const product = response.site.products.edges[0].node;

    return product.customFields.edges.map(field => ({
        name: field.node.name,
        value: field.node.value,
    }));
};

export const isUnderJoinProcess = async (context) => {
    const cart = await getCart(context);

    if (!cart || !cart.lineItems) return false;

    const joinProcessCartId = getLocalStorageItem('cartFromJoinProcess')?.value || '';

    return (joinProcessCartId === cart.id);
};
