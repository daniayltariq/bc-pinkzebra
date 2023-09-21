import PageManager from '../page-manager';
import { getData } from '../../api-helper';

export default class ConsultantSearch extends PageManager {
    constructor(context) {
        super(context);
        this.$overlay = $('.page .loadingOverlay');
        this.$resultsContainer = $('.page #search-results');
        this.context = context;
    }

    onReady() {
        const search = new URLSearchParams(window.location.search);
        this.searchType = search.get('type');
        this.searchParams = {};
        for (const [key, value] of new URLSearchParams(window.location.search)) {
            if (key !== 'type') {
                this.searchParams[key] = value;
            }
        }
        this.searchConsultants();

        this.pageTitle = 'Your search results';

        const urlReturn = search.get('url_return');
        if (urlReturn && urlReturn.includes('account') && urlReturn.includes('view_order')) {
            this.pageTitle = 'The consultant assigned to your order will be updated.';
            this.extraMessage = 'Please note that proceeding with this action will result in the removal of the Party ID associated with the order.';
        }
    }

    searchConsultants() {
        const searchTypes = {
            zip: () => this.searchByZip(new URLSearchParams(window.location.search)),
            params: () => this.searchByParams(new URLSearchParams(window.location.search)),
        };

        if (searchTypes && searchTypes[this.searchType]) {
            this.loading(true);

            searchTypes[this.searchType]().then((consultants) => {
                if (consultants.length > 0) {
                    this.handleResults(consultants);
                } else {
                    this.handleNoResults();
                }
                this.loading(false);
            }).catch((error) => {
                this.handleError(error);
                this.loading(false);
            });
        }
    }

    handleResults(consultants) {
        const consultantsHtml = consultants.map(({
            first_name: firstName,
            last_name: lastName,
            rep_img: imageUrl,
            city,
            state,
            website: websiteName,
        }) => (`
            <div class="consultant-information">
                <img src="${imageUrl}"/>
                <p class="fullname" >${firstName} ${lastName}</p>
                <p class="location">${city}, ${state}</p>
                <button class="button button--primary my-consultant" data-website="${websiteName}" href="#">My consultant</button>
            </div>
        `)).join('');
        let extraText = '';

        if (this.extraMessage) {
            extraText = `<span class="consultant-alert"> ${this.extraMessage} </span>`;
        }

        const resultsHTML = `<div>
            <h2 class="consultants-title">${this.pageTitle}</h2>
            ${extraText}
            <div class="consultants-wrapper">
                ${consultantsHtml}
            </div>
        </div>`;

        this.$resultsContainer.html(resultsHTML);

        this.bindConsultantSelection();
    }

    handleNoResults() {
        const resultsHTML = '<div>No consultants were found.</div>';

        this.$resultsContainer.html(resultsHTML);
    }

    handleError(error) {
        console.error(error);
        this.handleNoResults();
    }

    searchByZip() {
        let zipCode = '';
        for (const [key, value] of new URLSearchParams(window.location.search)) {
            if (key === 'zipcode') {
                zipCode = value;
            }
        }

        const { aws_cloudfront_url } = this.context.themeSetting;

        const aws = `${aws_cloudfront_url}searchByZipCode?zip_code=${zipCode}`;
        return getData(aws);
    }

    searchByParams() {
        const { aws_url } = this.context.themeSetting;

        const aws_search = new URL(`${aws_url}search`);
        const queryParams = new URLSearchParams(aws_search.search);

        for (const [key, value] of new URLSearchParams(window.location.search)) {
            if (key === 'firstName' && value.length >= 1) {
                queryParams.append('first_name', value);
            }

            if (key === 'lastName' && value.length >= 1) {
                queryParams.append('last_name', value);
            }

            if (key === 'consultantId' && value.length >= 1) {
                queryParams.append('repID', value);
            }

            if (key === 'webAddress' && value.length >= 1) {
                queryParams.append('website', value);
            }

            if (key === 'location' && value.length >= 1) {
                queryParams.append('state', value);
            }
        }

        aws_search.search = queryParams.toString();

        return getData(aws_search.toString());
    }

    bindConsultantSelection() {
        const consultansFound = document.getElementsByClassName('my-consultant');
        for (let i = 0; i < consultansFound.length; i++) {
            consultansFound[i].addEventListener('click', (event) => {
                const website = $(event.currentTarget).data('website');

                const search = new URLSearchParams(window.location.search);
                const returnUrl = search?.get('url_return') || '';
                const regex = /[?&][^=#]+=[^&#]+/;
                let url = `${window.location.protocol}//${window.location.host}${returnUrl}?consultant=${website}`;

                // Test if we have any other query parameters. Currently, it is only used for my account
                if (regex.test(search.get('url_return'))) {
                    url = `${window.location.protocol}//${window.location.host}${returnUrl.replace(/&?consultant_order=[^&]*/g, '')}&consultant_order=${website}`;
                }

                window.location.replace(url);
            });
        }
    }

    loading(flag) {
        this.$overlay[flag ? 'show' : 'hide']();
    }
}
