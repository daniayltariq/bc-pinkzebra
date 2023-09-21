import trackInventoryLevel from './track-inventory-level';


const onlyUniqueProducts = (product, index, array) => {
    const elementIndex = array.findIndex(element => element.id === product.id);
    if (elementIndex === index) {
        return product;
    }
};

export default function trackLayoutChanges(context) {
    return new Promise(async (resolve) => {
        const infoForProccessig = [];
        const productCards = context.productsResults;
        productCards.each(function () {
            const cardDataset = $(this).data();
            const product = {
                stock_level: cardDataset.currentStock,
                low_stock_level: cardDataset.lowStock,
                custom_fields: cardDataset.customFields,
                id: cardDataset.id,
                sku: cardDataset.sku,
            };
            infoForProccessig.push(product);
        });
        const uniqueProducts = infoForProccessig.filter(onlyUniqueProducts);
        const newContext = {
            productsResults: uniqueProducts,
            storefrontAPIToken: context.storefrontAPIToken,
        };
        await trackInventoryLevel(newContext);
        resolve();
    });
}
