import { copyToClipboard } from '../../../clipboard';
import { getLocalStorageItem } from '../../../local-storage-manager';
import { initCurrentParty } from './current-party';
import { getCurrentParty, getParties, getPartyById, MAX_NUMBER_OF_PARTIES, removeCurrentParty, setParty } from './parties-helper';
import { createParty } from './party';

const makeListScrolleable = () => {
    const partyListElements = document.getElementsByClassName('party-list');

    for (let i = 0; i < partyListElements.length; i++) {
        partyListElements[i].classList.add('scrolleable');
    }
};

const removeScrollFromList = () => {
    const partyListElements = document.getElementsByClassName('party-list');

    for (let i = 0; i < partyListElements.length; i++) {
        partyListElements[i].classList.remove('scrolleable');
    }
};

const createAndAppendParties = async (parties) => {
    const partyList = document.getElementsByClassName('party-list');

    if (parties.length < MAX_NUMBER_OF_PARTIES) {
        $('.view-all-parties').hide();
    } else {
        $('.view-all-parties').show();
        removeScrollFromList();
    }
    for (let index = 0; index < partyList.length; index++) {
        partyList[index].innerHTML = '';

        parties.forEach(party => {
            const partyElement = createParty(party);
            partyList[index].appendChild(partyElement);
        });
    }
    $('#loading-parties').hide();
};

const returnToPartiesList = () => {
    $('.no-current-party').show();
    $('.current-party').hide();
};

const bindReturnToParties = () => {
    const returnPartiesElements = document.getElementsByClassName('return-parties-list');

    for (let i = 0; i < returnPartiesElements.length; i++) {
        returnPartiesElements[i].addEventListener('click', () => {
            returnToPartiesList();
        });
    }
};

const bindSelectParty = () => {
    const partyList = document.querySelectorAll('.party-list');
    partyList.forEach((list) => {
        const nameElements = list.querySelectorAll('.name');

        nameElements.forEach((element) => {
            /* eslint-disable */
            element.addEventListener('click', (ev) => {
                const { target } = ev;
                const id = target.getAttribute('data-id');
                const party = getPartyById(id);
                setParty(party);
                $('.no-current-party').hide();
                $('.current-party').show();
                initCurrentParty(party);

                if (window.location.pathname === '/cart.php') {
                    location.reload();
                }
            });
            /* eslint-enabled */
        });
    });
};

const bindViewAll = () => {
    const viewAllElements = document.getElementsByClassName('view-all-parties');

    for (let i = 0; i < viewAllElements.length; i++) {
        viewAllElements[i].addEventListener('click', () => {
            const useLimit = false;
            const parties = getParties(useLimit);
            createAndAppendParties(parties);
            $('.view-all-parties').hide();
            makeListScrolleable();
            bindSelectParty();
        });
    }
};

const bindLeaveParty = () => {
    const leavePartyElements = document.getElementsByClassName('leave-party');
    /* eslint-disable */
    for (let i = 0; i < leavePartyElements.length; i++) {
        leavePartyElements[i].addEventListener('click', () => {
            removeCurrentParty();
            returnToPartiesList();
            if (window.location.pathname === '/cart.php') {
                location.reload();
            }
        });
    }
    /* eslint-enabled */
};

const displayTooltip = () => {
    const tooltips = document.querySelectorAll('#party-tooltip');
    tooltips.forEach(tooltip => {
        tooltip.style.display = 'block';
        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 1000);
    });
};

const bindShareLink = () => {
    const sharePartyElements = document.getElementsByClassName('share-party');

    for (let i = 0; i < sharePartyElements.length; i++) {
        sharePartyElements[i].addEventListener('click', () => {
            const consultant = getLocalStorageItem('consultant');
            const party = getCurrentParty();

            if (!consultant || !party) return;

            const consultantWebsite = consultant.value.website;
            const partyId = party.value.id;

            const url = `${window.location.protocol}//${window.location.hostname}?consultant=${consultantWebsite}&partyId=${partyId}`;
            const urlObj = new URL(url);

            copyToClipboard(urlObj.href)
                .then(() => {
                    console.log('Text copied to clipboard');
                })
                .catch((error) => {
                    console.error('Failed to copy text to clipboard:', error);
                });

            displayTooltip();
        });
    }
};

const bindCloseModal = () => {
    const closeButton = document.querySelectorAll('.consultant-parties__open .modal-close');
    closeButton.forEach(btn => {
        btn.addEventListener('click', () => {
            const myPartiesEl = document.getElementsByClassName('my-parties');

            for (let i = 0; i < myPartiesEl.length; i++) {
                myPartiesEl[i].click();
            }
        });
    });
};

const bindEvents = () => {
    bindViewAll();
    bindReturnToParties();
    bindSelectParty();
    bindLeaveParty();
    bindShareLink();
    bindCloseModal();
};

export const initParties = () => {
    $('.current-party').hide();
    $('.no-current-party').hide();

    const useLimit = true;
    const parties = getParties(useLimit);
    createAndAppendParties(parties);
    bindEvents();

    const currentParty = getCurrentParty();

    if (!currentParty) {
        $('.no-current-party').show();
    } else {
        const { value } = currentParty;
        $('.current-party').show();
        initCurrentParty(value);
    }
};
