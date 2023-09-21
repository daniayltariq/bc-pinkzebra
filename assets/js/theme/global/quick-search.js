import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
// import StencilDropDown from './stencil-dropdown';
import SearchDropDown from './search-dropdown';
import trackLayoutChanges from './track-layout-changes';
import { initScentflirtProductLabels } from '../common/utils/product-scentflirt-label';
import { addAvailabilityToProductsCards } from '../common/utils/product-availability';

const removeExtraProducts = ($html) => {
    const MAX_LIMIT = 4;
    $html.find('.product').slice(MAX_LIMIT).remove();

    let modifiedHtmlString = '';

    $html.each(function () {
        if (this.outerHTML) { modifiedHtmlString += this.outerHTML; }
    });

    return modifiedHtmlString;
};

const getHTMLWithLimit = (htmlString, searchQuery) => {
    const $html = $(htmlString);
    let response = htmlString;

    if ($html.find('.product').length > 4) {
        response = removeExtraProducts($html);
        response += `<a class="view-all-results" href="/search.php?search_query=${searchQuery}"> 
         VIEW ALL RESULTS </a>`;
    }

    return response;
};

export default function (context) {
    const $quickSearchResults = $('.quickSearchResults'); // ARRAY - quick search opening modals
    const $quickSearchForms = $('[data-quick-search-form]'); // ARRAY - forms
    const $quickSearchExpand = $('#quick-search-expand'); // input desktop
    const $quickSearchExpandMobile = $('#quick-search-expand-mobile'); // input mobile
    const $searchQuery = $quickSearchForms.find('[data-search-quick]'); // ARRAY - inputs

    const stencilDropDownExtendables = {
        hide: () => {
            $quickSearchExpand.attr('aria-expanded', false);
            $quickSearchExpandMobile.attr('aria-expanded', false);
            $searchQuery.trigger('focus');
        },
        show: (event) => {
            $quickSearchExpand.attr('aria-expanded', true);
            $quickSearchExpandMobile.attr('aria-expanded', true);
            $searchQuery.trigger('focus');
            event.stopPropagation();
        },
    };
    const stencilDropDown = new SearchDropDown(stencilDropDownExtendables);
    stencilDropDown.bind($('[data-search="quickSearch"]'), $('#quickSearch'));
    stencilDropDown.bind($('[data-search="quickSearch-mobile"]'), $('#quickSearch-mobile'));
    stencilDropDown.bind($('[data-search="quickSearch"]'), $('#quickSearch-mobile'));
    stencilDropDown.bind($('[data-search="quickSearch-mobile"]'), $('#quickSearch'));

    $quickSearchExpand.on('keyup', e => {
        $quickSearchExpandMobile.val(e.currentTarget.value);
    });

    $quickSearchExpandMobile.on('keyup', e => {
        $quickSearchExpand.val(e.currentTarget.value);
    });

    stencilDropDownExtendables.onBodyClick = (e, $container) => {
        // If the target element has this data tag or one of it's parents, do not close the search results
        // We have to specify `.modal-background` because of limitations around Foundation Reveal not allowing
        // any modification to the background element.
        if ($container.hasClass('is-open') && $(e.target).closest('[data-prevent-quick-search-close], .modal-background').length === 0) {
            stencilDropDown.hide($container);
        }
    };

    // stagger searching for 1200ms after last input
    const debounceWaitTime = 1200;
    const doSearch = _.debounce((searchQuery) => {
        utils.api.search.search(searchQuery, { template: 'search/quick-results' }, async (err, response) => {
            if (err) {
                return false;
            }

            const newHTML = getHTMLWithLimit(response, searchQuery);

            $quickSearchResults.html(newHTML);
            const $quickSearchResultsCurrent = $quickSearchResults.filter(':visible');
            const neededProducts = $quickSearchResults.find($('li.product article'));
            const modifyied = neededProducts.each(function () {
                const id = $(this).data('id');
                const data = `${id}_1`;
                $(this).attr('data-id-quick', data);
            });

            initScentflirtProductLabels(context, '.quickSearchResults');
            addAvailabilityToProductsCards('.productGrid', 'SEARCH');

            await trackLayoutChanges({ productsResults: modifyied, storefrontAPIToken: context.storefrontAPIToken });
            const $noResultsMessage = $quickSearchResultsCurrent.find('.quickSearchMessage');
            if ($noResultsMessage.length) {
                $noResultsMessage.attr({
                    role: 'status',
                    'aria-live': 'polite',
                });
            } else {
                const $quickSearchAriaMessage = $quickSearchResultsCurrent.next();
                $quickSearchAriaMessage.addClass('u-hidden');

                const predefinedText = $quickSearchAriaMessage.data('search-aria-message-predefined-text');
                const itemsFoundCount = $quickSearchResultsCurrent.find('.product').length;

                $quickSearchAriaMessage.text(`${itemsFoundCount} ${predefinedText} ${searchQuery}`);

                setTimeout(() => {
                    $quickSearchAriaMessage.removeClass('u-hidden');
                }, 100);
            }
        });
    }, debounceWaitTime);

    utils.hooks.on('search-quick', (event, currentTarget) => {
        const searchQuery = $(currentTarget).val();

        // server will only perform search with at least 3 characters
        if (searchQuery.length < 3) {
            return;
        }

        const searchQueryEncoded = searchQuery.replace(/ /g, '%20');

        doSearch(searchQueryEncoded);
    });

    // Catch the submission of the quick-search forms
    $quickSearchForms.on('submit', event => {
        event.preventDefault();

        const $target = $(event.currentTarget);
        const searchQuery = $target.find('input').val();
        const searchUrl = $target.data('url');

        if (searchQuery.length === 0) {
            return;
        }

        window.location.href = `${searchUrl}?search_query=${encodeURIComponent(searchQuery)}`;
    });
}
