import { graphqlService } from '../../graph-ql-service';


const LOW_STOCK = 'low_stock';
const NULL_STOCK = 'null_stock';


function generateArrayFromAllProductsData(...args) {
    return new Promise((resolve) => {
        const initialValue = [];
        const filteredElements = args.filter(element => element !== undefined)
            .reduce((accumulator, currentValue) => [...accumulator, ...currentValue], initialValue);
        resolve(filteredElements);
    });
}

const checkStockCriticalValueStatus = (currentStock, lowStock) => new Promise((resolve) => {
    const stockValue = parseInt(currentStock - lowStock, 10);
    if (stockValue < 0) {
        resolve(LOW_STOCK);
    } else if (stockValue === 0) {
        resolve(NULL_STOCK);
    }
    resolve(null);
});
const createElementWithMessage = (valueFromCustomField, buttonId) => {
    const element = $('<span>', {
        class: 'days-to-shipping',
        text: valueFromCustomField,
    });
    element.attr('data-setted', true);
    element.attr('data-id', buttonId);
    element.css('color', '#20A700');
    return element;
};

const createElementAndAppendToPriceSection = (valueFromCustomField, button) => new Promise((resolve) => {
    const buttonId = button.parents('article.card').data('id');
    const ifTheSameElementInQuickSearch = $(`article.card[data-id-quick="${buttonId}_1"]`);
    if (valueFromCustomField && !ifTheSameElementInQuickSearch[0]) {
        const element = createElementWithMessage(valueFromCustomField, buttonId);
        $(`article.card[data-id="${buttonId}"]`).find('.card-body .card-text .price-section--withoutTax').after(element);
        resolve();
    } else if (valueFromCustomField && ifTheSameElementInQuickSearch[0]) {
        const element = createElementWithMessage(valueFromCustomField, buttonId);
        $(`article.card[data-id-quick="${buttonId}_1"]`).find('.card-body .card-text .price-section--withoutTax').after(element);
        resolve();
    }
});

const disableButtonAndSetValue = (button, outOfStock) => new Promise((resolve) => {
    const value = outOfStock || 'Out Of Stock';
    button.addClass('disabled-button');
    button.text(value);
    resolve();
});

const callSetOfFunctions = (button, valueFromCustomField, outOfStock) => new Promise(async (resolve) => {
    await createElementAndAppendToPriceSection(valueFromCustomField, button);
    await disableButtonAndSetValue(button, outOfStock);
    resolve();
});
const chooseOperationAndExecute = (
    stock_status,
    valueFromCustomField,
    outOfStock, productId,
) => new Promise(async (resolve) => {
    switch (stock_status) {
    // eslint-disable-next-line no-case-declarations
    case LOW_STOCK:
        const productButton = $(`a[href$="product_id=${productId}"]`);
        await callSetOfFunctions(productButton, valueFromCustomField, outOfStock);
        resolve();
        break;
    // eslint-disable-next-line no-case-declarations
    case NULL_STOCK:
        const button = $(`a[data-product-id="${productId}"]`).length === 0 ?
            $(`a[href$="product_id=${productId}"]`)
            : $(`a[data-product-id="${productId}"]`);
        await callSetOfFunctions(button, valueFromCustomField, outOfStock);
        resolve();
        break;
    default:
        resolve();
        break;
    }
});

const checkProductsCardsAndSetModifications = (products, outOfStock) => new Promise(async (resolve) => {
    if (products && products.length > 0) {
        for (const product of products) {
            const { stock_level, low_stock_level } = product;
            if (stock_level && low_stock_level) {
                const valueFromCustomField = product.mpn ? product.mpn : null;
                // eslint-disable-next-line no-await-in-loop
                const stock_status = await checkStockCriticalValueStatus(stock_level, low_stock_level);
                // eslint-disable-next-line no-await-in-loop
                await chooseOperationAndExecute(stock_status, valueFromCustomField, outOfStock, product.id);
                resolve();
            }
        }
    }
});

// const showMessageBox = (message) => {
//     const $messageBox = $('.productAttributes-message');

//     if (message) {
//         $('.alertBox-message', $messageBox).text(message);
//         $messageBox.show();
//     } else {
//         $messageBox.hide();
//     }
// };

const handleElements = (productButton, message, outOfStock, disabled) => {
    const incrementDecrement = $('.button.button--icon');
    if (outOfStock) { productButton.val(outOfStock); }
    // showMessageBox(message);
    incrementDecrement.attr('disabled', disabled);
};

const handleProductOnProductPage = (product, outOfStock, addToCart) => new Promise(async (resolve) => {
    if (product.stock_level && product.low_stock_level) {
        const stockStatus = await checkStockCriticalValueStatus(product.stock_level, product.low_stock_level);
        const productButton = $('input#form-action-addToCart');
        if (stockStatus !== null) {
            productButton.addClass('disabled-button');
            const valueFromCustomField = product.mpn ? product.mpn : null;
            if (valueFromCustomField) {
                const ratingDiv = $('.productView-rating');
                const element = $('<span>', {
                    class: 'price price--withoutTax message-product-page',
                    text: valueFromCustomField,
                });
                // element.css({'color':'#20A700', 'letterSpacing': '1.4px'});
                ratingDiv.after(element);
                handleElements(productButton, outOfStock, outOfStock, true);
            }
        } else {
            productButton.removeClass('disabled-button');
            handleElements(productButton, null, addToCart, false);
        }
    }
    resolve();
});

const generateNeededProductData = (product) => new Promise(async (resolve) => {
    const template = product.site.product;
    const isInStock = template.inventory?.isInStock;
    const aggregated = template.inventory?.aggregated;
    const needed = {
        stock_level: isInStock ? aggregated?.availableToSell : null,
        low_stock_level: isInStock ? aggregated?.warningLevel : null,
        id: template.entityId,
        sku: template.sku,
        mpn: template.mpn,
        gtin: template.gtin,
    };
    resolve(needed);
});
function getItemsWithGraph(productIds, storefrontAPIToken) {
    return new Promise(async (resolve) => {
        const productToProccess = [];
        for (const item of productIds) {
            const query = `
            query productsById {
                site {
                    product(sku: "${item}") {
                        entityId
                        sku
                        gtin
                        mpn
                        inventory {
                            isInStock
                            hasVariantInventory 
                            aggregated {
                                availableToSell
                                warningLevel
                            }
                        }
                    }
                }
            }
            `;
            // eslint-disable-next-line no-await-in-loop
            const product = await graphqlService.request(query, storefrontAPIToken);
            // eslint-disable-next-line no-await-in-loop
            const needed = await generateNeededProductData(product);
            productToProccess.push(needed);
        }
        resolve(productToProccess);
    });
}
const prepareAndGetData = (allProducts, storefrontAPIToken) => new Promise(async (resolve) => {
    const allProductSkus = allProducts.map(p => p.sku);
    const requestedData = await getItemsWithGraph(allProductSkus, storefrontAPIToken);
    resolve(requestedData);
});
export default async function trackInventoryLevel(context) {
    const {
        product,
        productsResults,
        categoryProducts,
        productsFeatured,
        pageType,
        outOfStock,
        storefrontAPIToken,
        identifier,
        addToCart,
    } = context;

    if (
        !product
        && !productsResults
        && !categoryProducts
        && !productsFeatured
    ) {
        return;
    }

    if (pageType !== 'product') {
        const allProducts = await generateArrayFromAllProductsData(
            productsResults,
            categoryProducts,
            productsFeatured,
        );
        const requestedData = await prepareAndGetData(allProducts, storefrontAPIToken);
        await checkProductsCardsAndSetModifications(requestedData, outOfStock);
    }
    if (pageType === 'product' && identifier === undefined) {
        await handleProductOnProductPage(product, outOfStock);
        const allProducts = await generateArrayFromAllProductsData(product.related_products, product.similar_by_views);
        const requestedData = await prepareAndGetData(allProducts, storefrontAPIToken);
        if (requestedData.length > 0) {
            await checkProductsCardsAndSetModifications(requestedData, outOfStock);
        }
    }
    if (pageType === 'product' && identifier === 'SELECT') {
        const requestedData = await prepareAndGetData(productsResults, storefrontAPIToken);
        await handleProductOnProductPage(requestedData[0], outOfStock, addToCart);
    }
}
