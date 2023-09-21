import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};

export default function (secureBaseUrl, cartId) {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('#cart-preview-dropdown');
    const $cartLoading = $('<div class="loadingOverlay"></div>');
    const $cartText = $cart.find('.cart-text');
    const $body = $('body');

    if (window.ApplePaySession) {
        $cartDropdown.addClass('apple-pay-supported');
    }

    $body.on('cart-quantity-update', (event, quantity = 0, subTotal = 0) => {
        $cart.attr('aria-label', (_, prevValue) => prevValue.replace(/\d+/, quantity));

        // Uncomment to remove cart icon on mobile
        // if (!quantity) {
        //     $cart.addClass('navUser-item--cart__hidden-s');
        // } else {
        //     $cart.removeClass('navUser-item--cart__hidden-s');
        // }

        $('.cart-quantity')
            .text(() => (quantity > 99 ? '99+' : quantity))
            .toggleClass('countPill--positive', quantity > 0);
        if (utils.tools.storage.localStorageAvailable()) {
            localStorage.setItem('cart-quantity', quantity);
        }

        $cartText.text(`$${Number(subTotal).toFixed(2)}`);
        if (utils.tools.storage.localStorageAvailable()) {
            localStorage.setItem('cart-subTotal', subTotal);
        }
    });

    $cart.on('click', event => {
        const options = {
            template: 'common/cart-preview',
        };

        // Redirect to full cart page
        //
        // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
        // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
        if (/Mobi/i.test(navigator.userAgent)) {
            return event.stopPropagation();
        }

        event.preventDefault();

        $cartDropdown
            .addClass(loadingClass)
            .html($cartLoading);
        $cartLoading
            .show();

        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown
                .removeClass(loadingClass)
                .html(response);
            $cartLoading
                .hide();
        });
    });

    let quantity = 0;
    let subTotal = 0;

    if (cartId) {
        // Get existing quantity and subTotal from localStorage if found
        if (utils.tools.storage.localStorageAvailable()) {
            if (localStorage.getItem('cart-quantity') || localStorage.getItem('cart-subTotal')) {
                if (localStorage.getItem('cart-quantity')) {
                    quantity = Number(localStorage.getItem('cart-quantity'));
                }
                if (localStorage.getItem('cart-subTotal')) {
                    subTotal = Number(localStorage.getItem('cart-subTotal'));
                }

                $body.trigger('cart-quantity-update', [quantity, subTotal]);
            }
        }

        const cartQtyAndSubtotalPromise = new Promise((resolve, reject) => {
            utils.api.cart.getCartSummary({ baseUrl: secureBaseUrl, cartId }, (err, summary) => {
                if (err) {
                    // If this appears to be a 404 for the cart ID, set cart subTotal to 0
                    if (err === 'Not Found') {
                        resolve({ qty: 0, sTotal: 0 });
                    } else {
                        reject(err);
                    }
                }

                if (summary && summary.status !== 204 && summary.total_price) {
                    resolve({ qty: summary.total_quantity, sTotal: summary.total_price });
                }

                resolve({ qty: 0, sTotal: 0 });
            });
        });

        // If the Cart API gives us a different quantity number, update it
        cartQtyAndSubtotalPromise.then(({ qty, sTotal }) => {
            $body.trigger('cart-quantity-update', [qty, sTotal]);
        });
    } else {
        $body.trigger('cart-quantity-update', [quantity, subTotal]);
    }
}
