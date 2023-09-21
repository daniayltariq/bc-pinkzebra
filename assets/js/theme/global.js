import 'focus-within-polyfill';
import 'regenerator-runtime/runtime';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle, { setMenuDisplay, logoAnimationOnScrollGSAP } from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import { initConsultant } from './consultant/consultant-manager';
import mediaQueryListFactory from './common/media-query-list';
import trackInventoryLevel from './global/track-inventory-level';
import { initProductSetWidget } from './global/product-set-widget';
// import setListenersToPagination from './global/set-listener-to-pagination';

const largeMediaQueryList = mediaQueryListFactory('large');

const adjustElementsWithBanner = () => {
    $(document).ready(() => {
        const firstChild = $('.header-container').children().first();

        if (firstChild.hasClass('banners')) {
            $('.isMobile .navPages-container').css('top', '130px');
            $('.isMobile .navPages-container .navPages').css('padding', '0 1.5rem 10rem 0');
            $('.isMobile .navPages-container .find-a-consultant').css('top', '60%');
            $('.isMobile .navPages-container .find-a-consultant').css('padding', '1rem 0 4rem 0');
        }
    });
};
export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch(this.context, secureBaseUrl);
        currencySelector(cartId, this.context);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        logoAnimationOnScrollGSAP();
        mobileMenuToggle();
        setMenuDisplay(largeMediaQueryList.matches);
        privacyCookieNotification();
        svgInjector();
        initConsultant(this.context);
        trackInventoryLevel(this.context);
        // setListenersToPagination(this.context);
        adjustElementsWithBanner();
        initProductSetWidget();
    }
}
