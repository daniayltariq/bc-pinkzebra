import PageManager from '../page-manager';

// TODO
// IMPORTANT: GET PARTIES REQUEST HAS BEEN MOCKED DUE TO MISSING WORKING ENDPOINT.
// IS UP TO PINK ZEBRA TO COMPLETE IT WHEN THE API IS WORKING.

const bodyMockResponse = {
    parties: [
        {
            party_id: 4353522,
            repID: 1234,
            host_name: 'Candace Mertens',
            party_name: 'Exotic Party',
            ends_date: 'Jan 11th 2024',
            orders_qty: 12,
            dolars: '$17.20',
            status: 'Booked',
            share_link: '/?consultant=ittest%201&partyId=3',
        },
        {
            party_id: 56436,
            repID: 5678,
            host_name: 'Felicia Cheshire',
            party_name: 'Best Party Ever',
            ends_date: 'Mar 20th 2024',
            orders_qty: 9,
            dolars: '$12.50',
            status: 'Cancelled',
            share_link: '/?consultant=ittest%201&partyId=3',
        },
    ],
};

export default class MyParties extends PageManager {
    constructor(context) {
        super(context);
        this.$overlay = $('.page .loadingOverlay');
        this.$partiesContainer = $('.page #my-parties');
        this.context = context;
    }

    onReady() {
        this.getPartiesByHost(this.context);
    }

    getPartiesByHost(context) {
        // COMPLETE WITH API REQUEST AND LOADING STATE WHILE GETTING DATA
        // DATE WHEN PARTY WAS CREATED IS NOT PART OF THE RESPONSE.
        // PARTY END DATE IS USED FOR DISPLAY.
        this.handleResults(context, bodyMockResponse.parties);
    }

    handleResults(context, parties) {
        const partiesHtml = parties.map(({
            party_id: partyId,
            // repID: repId,
            // host_name: hostName,
            // party_name: partyName,
            ends_date: endsDate,
            orders_qty: ordersQty,
            dolars,
            status,
            share_link: shareLink,
        }) => {
            const fullUrl = `${context.secureBaseUrl}${shareLink}`;

            return (`
                <div class="party-wrapper">
                    <div class="party-info">
                        <div class="party-id">Party ID ${partyId}</div>
                        <div class="party-status desktop">${status}</div>
                    </div>
                    <div class="party-table">
                        <div class="data-column">
                            <h6 class="data-title">Date</h6>
                            <span class="data-value">${endsDate}</span>
                        </div>
                        <div class="data-column">
                            <h6 class="data-title">Orders</h6>
                            <span class="data-value">${ordersQty}</span>
                        </div>
                        <div class="data-column">
                            <h6 class="data-title">Dollars</h6>
                            <span class="data-value">${dolars}</span>
                        </div>
                        <div class="data-column">
                            <h6 class="data-title">Share</h6>
                            <div class="share-icons-wrapper">
                                <button href="${shareLink}" class="share-button">Copy Link</button>
                                <button class="email-share-button">
                                    <svg width="38px" height="38px"><use href="#icon-email_2"></use></svg>
                                </button>
                                <button id="shareBtn" class="fb-share-button">
                                    <svg width="38px" height="38px"><use href="#icon-facebook"></use></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="party-info">
                        <div class="party-status mobile">${status}</div>
                    </div>
                </div>
                <script>
                    document.getElementById('shareBtn').onclick = function() {
                    FB.ui({
                        display: 'popup',
                        method: 'share',
                        href: '${fullUrl}',
                    }, function(response){});
                    }
                </script>
            `);
        }).join('');

        this.$partiesContainer.html(partiesHtml);
        this.bindCopyLink();
    }

    handleNoResults() {
        const resultsHTML = '<div>No parties found.</div>';

        this.$partiesContainer.html(resultsHTML);
    }

    handleError(error) {
        console.error(error);
        this.handleNoResults();
    }

    bindCopyLink() {
        $('.party-table .share-button').on('click', event => {
            const url = event.target.getAttribute('href');
            const { secureBaseUrl } = this.context;
            navigator.clipboard.writeText(secureBaseUrl + url);
        });
    }

    loading(flag) {
        this.$overlay[flag ? 'show' : 'hide']();
    }
}
