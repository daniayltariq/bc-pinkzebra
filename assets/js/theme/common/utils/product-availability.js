const calculateDateAndCreateLabel = ($card) => {
    const $availabilityDiv = $card.find('.availability');
    const dataDays = $availabilityDiv.attr('data-days');
    if (!dataDays) return;

    const today = new Date();
    today.setDate(today.getDate() + parseInt(dataDays, 10));
    const options = {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };

    const formattedDate = today.toLocaleDateString('en-US', options);

    return `SHIPPING ON ${formattedDate.replace(/,/g, '')}`;
};

const injectLabel = ($product, text) => {
    const $availabilityDiv = $product.find('.availability');
    $availabilityDiv.text(text);
};

export function addAvailabilityToProductsCards(target, view) {
    const container = document.querySelector(target);

    if (!container) return;

    if (view === 'PDP') {
        const label = calculateDateAndCreateLabel($(container));
        if (label) injectLabel($(container), label);
    } else {
        const productContainer = view === 'CAROUSEL' ? '.card' : '.product';
        const products = container.querySelectorAll(productContainer);
        const productsArray = Array.from(products);

        productsArray.forEach(product => {
            const $card = $(product);
            const label = calculateDateAndCreateLabel($card);
            if (label) injectLabel($card, label);
        });
    }
}
