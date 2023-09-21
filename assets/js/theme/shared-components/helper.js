
const pageDictionary = {
    join: 'scentflirt.',
    host_a_party: 'host_a_party.',
};

const getTranslations = async (context, page) => new Promise((resolve) => {
    const parsed = JSON.parse(context);
    const result = Object.entries(parsed.translations)
        .reduce((texts, [key, text]) => ({
            ...texts,
            [key.replace(pageDictionary[page], '')]: text,
        }), {});
    resolve(result);
});

export const getParsedTranslations = async (context, page) => {
    const translations = await getTranslations(context, page);
    const translationsParsed = {};
    for (const [key, value] of Object.entries(translations)) {
        const [prefix, index, property] = key.split('.');

        if (!Array.isArray(translationsParsed[prefix])) translationsParsed[prefix] = [];

        const currentIndex = parseInt(index, 10);

        while (translationsParsed[prefix].length <= currentIndex) {
            translationsParsed[prefix].push({});
        }

        translationsParsed[prefix][currentIndex][property] = value;
    }

    return translationsParsed;
};
