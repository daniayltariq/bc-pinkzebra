import { createParty } from './party';

const createAndAppend = (party) => {
    const currentPartyList = document.querySelectorAll('.current-party-list');
    currentPartyList.forEach(list => {
        list.innerHTML = '';
        const partyElement = createParty(party);
        list.appendChild(partyElement);
    });
};

export const initCurrentParty = (party) => {
    createAndAppend(party);
};
