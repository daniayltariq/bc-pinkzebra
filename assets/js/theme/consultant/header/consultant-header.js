import { getLocalStorageItem } from '../../../local-storage-manager';
import { initParties } from '../parties/parties-view';
import { createChangeConsultantSection, createConsultantSection, removeFindAConsultantSection } from './header-view';

// consultant-header-checkout AD CONSULTANT FOR THIS CLASS

const createConsultantView = (context, consultantFromStorage) => {
    if (consultantFromStorage?.value) {
        const { name, img } = consultantFromStorage.value;
        removeFindAConsultantSection();
        createConsultantSection(context, name, img, '.consultant-header');
        createConsultantSection(context, name, img, '.consultant-header--mobile');
        createChangeConsultantSection(context);
    }
};

const showPartiesSection = () => {
    const partiesSection = document.getElementsByClassName('consultant-parties');
    for (let index = 0; index < partiesSection.length; index++) {
        partiesSection[index].classList.remove('hidden');
    }
};

const hidePartiesSection = () => {
    const partiesSection = document.getElementsByClassName('consultant-parties');
    for (let index = 0; index < partiesSection.length; index++) {
        partiesSection[index].classList.add('hidden');
    }
};

const onClose = (myPartiesEl) => {
    myPartiesEl.style.setProperty('--my-after-content', '"+"');
    hidePartiesSection();
    document.getElementById('main-content').classList.remove('disabled');
    document.getElementById('menu').classList.remove('disabled');
    // document.getElementsByClassName('navUser-login')[0].classList.remove('disabled');
    document.getElementsByClassName('navUser-item--cart')[0].classList.remove('disabled');
};

const onOpen = (myPartiesEl) => {
    $('#loading-parties').show();
    myPartiesEl.style.setProperty('--my-after-content', '"-"');
    showPartiesSection();
    document.getElementById('main-content').classList.add('disabled');
    document.getElementById('menu').classList.add('disabled');
    // document.getElementsByClassName('navUser-login')[0].classList.add('disabled');
    document.getElementsByClassName('navUser-item--cart')[0].classList.add('disabled');
    initParties();
};

const bindEvents = () => {
    const myPartiesEl = document.getElementsByClassName('my-parties');

    for (let i = 0; i < myPartiesEl.length; i++) {
        myPartiesEl[i].addEventListener('click', () => {
            if (myPartiesEl[i].classList.contains('active')) {
                onClose(myPartiesEl[i]);
            } else {
                onOpen(myPartiesEl[i]);
            }
            myPartiesEl[i].classList.toggle('active');
        });
    }
};

export const initHeader = (context) => {
    const consultant = getLocalStorageItem('consultant');

    if (consultant?.value?.name) {
        createConsultantView(context, consultant);
        bindEvents();
    }
    const consultantHeader = document.getElementsByClassName('consultant-header')[0] || null;
    if (consultantHeader) {
        consultantHeader.classList.remove('hidden');
    }
};
