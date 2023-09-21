const allowedCountries = ['united states', 'us', 'canada', 'ca'];

export const removeUndesirableCountries = (selector) => {
    if (!selector) return null;

    const selectElement = document.querySelector(selector);

    if (!selectElement) return null;

    for (let i = selectElement.options.length - 1; i > 0; i--) {
        const option = selectElement.options[i];
        const optionValue = option.value;

        if (optionValue && !allowedCountries.includes(optionValue.toLowerCase())) {
            selectElement.remove(i);
        }
    }
};
