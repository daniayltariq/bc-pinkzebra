export const initProductSetWidget = () => {
    const targetElements = document.querySelectorAll('[data-test-id="product-set-widget-name"]');

    // Loop through each element and add a button next to it
    targetElements.forEach(element => {
        const button = document.createElement('a');
        const anchorElement = element.querySelector('a');

        if (anchorElement) {
            const hrefValue = anchorElement.getAttribute('href');
            button.href = hrefValue;
        }

        button.textContent = 'SHOP NOW';
        button.classList.add('shop-now-link');
        // Insert the button after the element
        element.insertAdjacentElement('afterend', button);
    });
};
