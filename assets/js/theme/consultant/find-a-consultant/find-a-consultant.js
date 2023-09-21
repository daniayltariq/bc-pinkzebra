const addRedirectUrl = (url) => {
    const currentURL = window.location.href;
    let redirect = '';

    switch (true) {
    case currentURL.includes('/host-a-party/'):
        redirect = '/host-a-party/';
        break;
    case currentURL.includes('/scentflirt/'):
        redirect = '/scentflirt/';
        break;
    case currentURL.includes('/account.php?action=view_order&order_id='):
        redirect = `/account${currentURL.split('/account')[1]}`;
        break;
    default:
        redirect = '';
    }

    if (!redirect) return url;

    let redirectUrl = url;

    redirectUrl += redirectUrl.includes('?') ? '&' : '?';
    redirectUrl += `url_return=${encodeURIComponent(redirect)}`;

    return redirectUrl;
};

export const getConsultantResultURL = (formData) => {
    const params = [];

    for (const pair of formData.entries()) {
        params.push(`${pair[0]}=${pair[1]}`);
    }

    const urlParamsJoint = params.join('&');
    let searchType = 'params';

    if (urlParamsJoint.includes('zipcode')) {
        searchType = 'zip';
    }

    const urlWithSearchParams = `${window.location.protocol}//${window.location.host}/consultant-search/?type=${searchType}&${urlParamsJoint}`;
    const urlWithSearchParamsAndRedirect = addRedirectUrl(urlWithSearchParams);

    return urlWithSearchParamsAndRedirect;
};

const bindToggleView = (target) => {
    const findConsultantForm = document.getElementsByClassName('find-a-consultant');
    for (let i = 0; i < target.length; i++) {
        target[i].addEventListener('click', () => {
            for (let index = 0; index < findConsultantForm.length; index++) {
                const formEl = findConsultantForm[index];
                if (formEl.style.display === 'none') {
                    formEl.style.display = 'block';
                } else {
                    formEl.style.display = 'none';
                }
            }
        });
    }
};

const openSearchView = () => {
    const findElements = document.getElementsByClassName('open-find-consultant');
    bindToggleView(findElements);
};

const searchConsultant = () => {
    const searchForm = document.getElementsByClassName('search-consultant-form');
    for (let i = 0; i < searchForm.length; i++) {
        searchForm[i].addEventListener('submit', (ev) => {
            ev.preventDefault();
            const formData = new FormData(ev.target);
            const url = getConsultantResultURL(formData);
            window.location.replace(url);
        });
    }
};

const closeModal = () => {
    const closeEl = document.getElementsByClassName('close-find-a-consultant');
    bindToggleView(closeEl);
};

const bindEvents = () => {
    openSearchView();
    searchConsultant();
    closeModal();
};

export const findAConsultant = () => {
    bindEvents();
};
