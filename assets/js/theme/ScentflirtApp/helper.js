export const addItemsToCart = async (items) => {
    const body = {
        lineItems: [],
        locale: 'en',
    };

    items.forEach((item) => {
        const lineItem = {
            quantity: 1,
            productId: item.id,
        };

        if (item.optionData) {
            const { optionId, optionValue } = item.optionData;
            lineItem.optionSelections = [
                {
                    optionId: parseInt(optionId, 10),
                    optionValue: parseInt(optionValue, 10),
                },
            ];
        }

        body.lineItems.push(lineItem);
    });

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };

    return fetch('/api/storefront/carts', options);
};

export const removeCurrentCart = async (cartId) => {
    try {
        const options = { method: 'DELETE', headers: { 'Content-Type': 'application/json' } };
        return fetch(`/api/storefront/carts/${cartId}`, options);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getCurrentCartId = async () => {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('/api/storefront/cart-summary', options);

    const data = await response.json();

    return data.id;
};

export const sendOrderToPinkZebra = async (cartId, pzEndpoint) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            orderId: cartId,
        }),
    };

    return fetch(`${pzEndpoint}/scentflirt`, options);
};
