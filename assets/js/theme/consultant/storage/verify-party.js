import { defaultModal } from '../../global/modal';
import { getPartyById, setParty } from '../parties/parties-helper';

export const verifyAndStoreParty = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const partyId = urlParams.get('partyId');

    if (!partyId) {
        return;
    }

    const partyFound = getPartyById(partyId);

    if (!partyFound) {
        const modal = defaultModal();
        modal.open();
        modal.updateContent(`
        <div class="no-party-found">
            <span> The party you have entered does not exist! </span>
        </div>`);
        return;
    }

    setParty(partyFound);
};
