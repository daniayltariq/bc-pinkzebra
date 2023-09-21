import urlUtils from './utils/url-utils';

/* The PriceFacet class is responsible for rendering and handling the behavior of price range
checkboxes on category and search page. */
export class PriceFacet {
    constructor(context, target) {
        this.context = context;
        this.target = target;
        this.handleClick = this.handleClick.bind(this);
        this.renderCheckboxes();
    }

    bindEvents() {
        const params = new URLSearchParams(window.location.search);
        const min = params.get('min_price') || -1;
        const max = params.get('max_price') || -1;

        this.elements = Array.from(document.querySelectorAll(`.${this.target}`));
        this.elements.forEach((element) => {
            element.addEventListener('click', this.handleClick);
            if (element.getAttribute('min') === min && element.getAttribute('max') === max) {
                element.classList.add('is-selected');
            }
        });
    }

    handleClick(event) {
        const { target } = event;
        const currentUrl = new URL(window.location.href);
        const oldMaxPrice = currentUrl.searchParams.get('max_price');
        const oldMinPrice = currentUrl.searchParams.get('min_price');

        if (target.classList.contains('is-selected')) {
            target.classList.remove('is-selected');
            const searchParams = new URLSearchParams(currentUrl.search);

            if (currentUrl.searchParams.has('max_price')) {
                searchParams.delete('max_price');
            }
            if (currentUrl.searchParams.has('min_price')) {
                searchParams.delete('min_price');
            }

            currentUrl.search = searchParams.toString();

            urlUtils.goToUrl(currentUrl.toString());
        } else {
            this.elements.forEach((element) => {
                element.classList.remove('is-selected');
            });

            target.classList.add('is-selected');
        }

        const min = target.getAttribute('min') || 0;
        const max = target.getAttribute('max') || 10000;

        if (min === oldMinPrice || max === oldMaxPrice) return;

        currentUrl.searchParams.set('max_price', max);
        currentUrl.searchParams.set('min_price', min);
        const newUrl = currentUrl.toString();

        urlUtils.goToUrl(newUrl);
    }

    renderCheckboxes() {
        const { priceRange } = this.context;

        if (!Array.isArray(priceRange)) return;

        const $priceRangeContainer = $('.navList-priceRange');

        if ($priceRangeContainer.children().length > 0) {
            return;
        }

        priceRange.forEach(range => {
            const $priceRange = $(`<li class="navList-item">
                <a class="navList-action navList-action--checkbox price-option" role="status" aria-live="assertive" min="${range.min}" max="${range.max}">
                ${range.label} 
                </a> 
                </li>`);

            $('.navList-priceRange').append($priceRange);
        });
    }
}
