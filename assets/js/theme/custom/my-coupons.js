import PageManager from '../page-manager';

// TODO
// IMPORTANT: GET COUPONS REQUEST HAS BEEN MOCKED DUE TO MISSING WORKING ENDPOINT.
// IS UP TO PINK ZEBRA TO COMPLETE IT WHEN THE API IS WORKING.

const bodyMockResponse = {
    coupons: [
        {
            name: '10% OFF',
            code: '10OFF',
            end_date: 'Jan 11th 2024',
            status: 'Active',
        },
        {
            name: '20% OFF',
            code: '20OFF',
            end_date: 'Mar 20th 2024',
            status: 'Used',
        },
    ],
};

export default class MyCoupons extends PageManager {
    constructor(context) {
        super(context);
        this.$overlay = $('.page .loadingOverlay');
        this.$couponsContainer = $('.page #my-coupons');
        this.context = context;
    }

    onReady() {
        this.getCouponsByHost();
    }

    getCouponsByHost() {
        // COMPLETE WITH API REQUEST AND LOADING STATE WHILE GETTING DATA
        // DATE WHEN coupon WAS CREATED IS NOT PART OF THE RESPONSE.
        // coupon END DATE IS USED FOR DISPLAY.
        this.handleResults(bodyMockResponse.coupons);
    }

    handleResults(coupons) {
        const couponsHtml = coupons.map(({
            name,
            code,
            end_date: endDate,
            status,
        }) => (`
            <div class='coupon-wrapper'>
                <div class='coupon-info'>
                    <div class='coupon-id'>${name}</div>
                    <div class='coupon-status desktop'>${status}</div>
                </div>
                <div class='coupon-table'>
                    <div class='data-column'>
                        <h6 class='data-title'>Code</h6>
                        <span class='coupon-code data-value'>${code}</span>
                    </div>
                    <div class='data-column'>
                        <h6 class='data-title'>Valid Until</h6>
                        <span class='data-value'>${endDate}</span>
                    </div>
                    <div class='data-column'>
                        <button class='button button--primary copy-button ${status !== 'Active' ? 'u-hidden' : ''}'>Copy Code</button>
                    </div>
                    <div class='data-column mobile'>
                        <div class='coupon-status'>${status}</div>
                    </div>
                </div>
            </div>
        `)).join('');

        this.$couponsContainer.html(couponsHtml);
        this.bindCopyLink();
    }

    handleNoResults() {
        const resultsHTML = '<div>No coupons found.</div>';

        this.$couponsContainer.html(resultsHTML);
    }

    handleError(error) {
        console.error(error);
        this.handleNoResults();
    }

    bindCopyLink() {
        $('.coupon-table .copy-button').on('click', () => {
            const code = $('.coupon-table .coupon-code').html();
            navigator.clipboard.writeText(code);
        });
    }

    loading(flag) {
        this.$overlay[flag ? 'show' : 'hide']();
    }
}
