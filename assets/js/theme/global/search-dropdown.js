export default class SearchDropdown {
    constructor(extendables) {
        this.extendables = extendables;
    }

    /**
     * @param $dropDown
     */
    hide($dropDown) {
        // callback "hide"
        if (this.extendables && this.extendables.hide) {
            this.extendables.hide();
        }

        $dropDown.removeClass('is-open f-open-dropdown').attr('aria-hidden', 'true');
    }

    show($dropDown, event) {
        $dropDown.addClass('is-open f-open-dropdown').attr('aria-hidden', 'false');

        // callback "show"
        if (this.extendables && this.extendables.show) {
            this.extendables.show(event);
        }
    }

    bind($dropDownTrigger, $container) {
        let modalOpened = false;

        $dropDownTrigger.on('keyup', event => {
            if (event.target.value.length <= 2 && $container.hasClass('is-open')) {
                this.hide($container, event);
            }

            if (event.target.value.length >= 3 && !$container.hasClass('is-open')) {
                this.show($container, event);
            }
        }).on('click', event => {
            if (event.target.value.length >= 3) {
                this.show($container, event);
            }
        });

        $('body').on('click', e => {
            // Call onClick handler
            if (this.extendables && this.extendables.onBodyClick) {
                this.extendables.onBodyClick(e, $container);
            }
        }).on('keyup', (e) => {
            // If they hit escape and the modal isn't open, close the search
            if (e.which === 27 && !modalOpened) {
                this.hide($container);
            }
        }).on('open.fndtn.reveal', '[data-reveal]', () => {
            modalOpened = true;
        }).on('close.fndtn.reveal', '[data-reveal]', () => {
            modalOpened = false;
        }).on('click', '[data-drop-down-close]', () => {
            modalOpened = false;
            this.hide($container);
        });
    }
}
