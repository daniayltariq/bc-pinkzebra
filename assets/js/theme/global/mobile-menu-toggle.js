import _ from 'lodash';
import mediaQueryListFactory from '../common/media-query-list';
import { CartPreviewEvents } from './cart-preview';

const PLUGIN_KEY = {
    CAMEL: 'mobileMenuToggle',
    SNAKE: 'mobile-menu-toggle',
};

function optionsFromData($element) {
    const mobileMenuId = $element.data(PLUGIN_KEY.CAMEL);

    return {
        menuSelector: mobileMenuId && `#${mobileMenuId}`,
    };
}

export function setMenuDisplay(queryListMatch) {
    if (queryListMatch) {
        $('.navUser.navUser--mobile').addClass('u-hidden');
        $('.navUser--main.navUser--mobile').addClass('u-hidden');
        $('.navUser.navUser--desktop').removeClass('u-hidden');
        $('.navUser--main.navUser--desktop').removeClass('u-hidden');
        $('body').removeClass('isMobile');
        $('body').addClass('isDesktop');
    } else {
        $('.navUser.navUser--mobile').removeClass('u-hidden');
        $('.navUser--main.navUser--mobile').removeClass('u-hidden');
        $('.navUser.navUser--desktop').addClass('u-hidden');
        $('.navUser--main.navUser--desktop').addClass('u-hidden');
        $('body').addClass('isMobile');
        $('body').removeClass('isDesktop');
    }
}

export function logoAnimationOnScrollGSAP() {
    /* eslint-disable */
    gsap.registerPlugin(ScrollTrigger);

    const headerMobile = $('#navMobile');
    const headerLogo = $('#navMobile-logo');
    
    function hideElements() {
        headerLogo.css('visibility', 'hidden');
    }

    function showElements() {
        headerLogo.css('visibility', 'visible');
    }

    // create a timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#navMobile',
            start: 'center top',
            toggleActions: 'restart none none reverse',
        },
    });
    /* eslint-enable */

    tl.to(headerLogo, {
        duration: 0.2,
        scale: 0.5,
        opacity: 0,
        boxShadow: 'none',
        onComplete: hideElements,
    }).to(headerMobile, {
        duration: 0.3,
        visibility: 'visible',
        opacity: 1,
        onReverseComplete: showElements,
    });
}

/*
 * Manage the behaviour of a mobile menu
 * @param {jQuery} $toggle
 * @param {Object} [options]
 * @param {Object} [options.headerSelector]
 * @param {Object} [options.menuSelector]
 * @param {Object} [options.scrollViewSelector]
 */
export class MobileMenuToggle {
    constructor($toggle, {
        headerSelector = '.header',
        menuSelector = '#menu',
        scrollViewSelector = '.navPages',
    } = {}) {
        this.$body = $('body');
        this.$menu = $(menuSelector);
        this.$navList = $('.navPages-list.navPages-list-depth-max');
        this.$header = $(headerSelector);
        this.$scrollView = $(scrollViewSelector, this.$menu);
        this.$subMenus = this.$navList.find('.navPages-action');
        this.$toggle = $toggle;
        // this.mediumMediaQueryList = mediaQueryListFactory('medium');
        this.largeMediaQueryList = mediaQueryListFactory('large');

        // Auto-bind
        this.onToggleClick = this.onToggleClick.bind(this);
        this.onCartPreviewOpen = this.onCartPreviewOpen.bind(this);
        // this.onMediumMediaQueryMatch = this.onMediumMediaQueryMatch.bind(this);
        this.onLargeMediaQueryMatch = this.onLargeMediaQueryMatch.bind(this);
        this.onSubMenuClick = this.onSubMenuClick.bind(this);

        // Listen
        this.bindEvents();

        // Assign DOM attributes
        this.$toggle.attr('aria-controls', this.$menu.attr('id'));

        // Hide by default
        this.hide();
    }

    get isOpen() {
        return this.$menu.hasClass('is-open');
    }

    bindEvents() {
        this.$toggle.on('click', this.onToggleClick);
        this.$header.on(CartPreviewEvents.open, this.onCartPreviewOpen);
        this.$subMenus.on('click', this.onSubMenuClick);
        // window.addEventListener('resize', () => setMenuDisplay(this.mediumMediaQueryList.matches));
        window.addEventListener('resize', () => setMenuDisplay(this.largeMediaQueryList.matches));

        // if (this.mediumMediaQueryList && this.mediumMediaQueryList.addListener) {
        //     this.mediumMediaQueryList.addListener(this.onMediumMediaQueryMatch);
        // }
        if (this.largeMediaQueryList && this.largeMediaQueryList.addListener) {
            this.largeMediaQueryList.addListener(this.onLargeMediaQueryMatch);
        }
    }

    unbindEvents() {
        this.$toggle.off('click', this.onToggleClick);
        this.$header.off(CartPreviewEvents.open, this.onCartPreviewOpen);

        // if (this.mediumMediaQueryList && this.mediumMediaQueryList.addListener) {
        //     this.mediumMediaQueryList.removeListener(this.onMediumMediaQueryMatch);
        // }
        if (this.largeMediaQueryList && this.largeMediaQueryList.addListener) {
            this.largeMediaQueryList.removeListener(this.onLargeMediaQueryMatch);
        }
    }

    toggle() {
        if (this.isOpen) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.$body.addClass('has-activeNavPages');

        this.$toggle
            .addClass('is-open')
            .attr('aria-expanded', true);

        this.$menu.addClass('is-open');

        this.$header.addClass('is-open');
        this.$scrollView.scrollTop(0);

        this.resetSubMenus();
    }

    hide() {
        this.$body.removeClass('has-activeNavPages');

        this.$toggle
            .removeClass('is-open')
            .attr('aria-expanded', false);

        this.$menu.removeClass('is-open');

        this.$header.removeClass('is-open');

        this.resetSubMenus();
    }

    // Private
    onToggleClick(event) {
        event.preventDefault();

        this.toggle();
    }

    onCartPreviewOpen() {
        if (this.isOpen) {
            this.hide();
        }
    }

    // onMediumMediaQueryMatch(media) {
    onLargeMediaQueryMatch(media) {
        if (!media.matches) {
            return;
        }

        this.hide();
    }

    onSubMenuClick(event) {
        const $closestAction = $(event.target).closest('.navPages-action');
        const $parentSiblings = $closestAction.parent().siblings();
        const $parentAction = $closestAction.closest('.navPage-subMenu-horizontal').siblings('.navPages-action');

        if (this.$subMenus.hasClass('is-open')) {
            this.$navList.addClass('subMenu-is-open');
        } else {
            this.$navList.removeClass('subMenu-is-open');
        }

        if ($(event.target).hasClass('is-open')) {
            $parentSiblings.addClass('is-hidden');
            $parentAction.addClass('is-hidden');
        } else {
            $parentSiblings.removeClass('is-hidden');
            $parentAction.removeClass('is-hidden');
        }
    }

    resetSubMenus() {
        this.$navList.find('.is-hidden').removeClass('is-hidden');
        this.$navList.removeClass('subMenu-is-open');
    }
}

/*
 * Create a new MobileMenuToggle instance
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.headerSelector]
 * @param {Object} [options.menuSelector]
 * @param {Object} [options.scrollViewSelector]
 * @return {MobileMenuToggle}
 */
export default function mobileMenuToggleFactory(selector = `[data-${PLUGIN_KEY.SNAKE}]`, overrideOptions = {}) {
    const $toggle = $(selector).eq(0);
    const instanceKey = `${PLUGIN_KEY.CAMEL}Instance`;
    const cachedMobileMenu = $toggle.data(instanceKey);

    if (cachedMobileMenu instanceof MobileMenuToggle) {
        return cachedMobileMenu;
    }

    const options = _.extend(optionsFromData($toggle), overrideOptions);
    const mobileMenu = new MobileMenuToggle($toggle, options);

    $toggle.data(instanceKey, mobileMenu);

    return mobileMenu;
}
