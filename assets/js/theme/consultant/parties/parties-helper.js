import { getLocalStorageItem, isLocalStorageItemExpired, removeLocalStorageItem, setLocalStorageWithExpiration } from '../../../local-storage-manager';

export const MAX_NUMBER_OF_PARTIES = 3;

export const getParties = (useLimit) => {
    const consultant = getLocalStorageItem('consultant');
    if (!consultant?.value) return [];

    const { value: { parties } } = consultant;

    const response = [];

    let limit = useLimit ? MAX_NUMBER_OF_PARTIES : parties.length;
    limit = limit > parties.length ? parties.length : limit;

    for (let index = 0; index < limit; index++) {
        const party = parties[index];
        response.push({
            id: party.party_id,
            name: party.party_name,
            host: 'TBD',
            ends: 'TBD',
        });
    }

    return response;
};

export const setParty = (party) => {
    setLocalStorageWithExpiration('current_party', party, 24 * 60 * 60 * 1000);
};

export const removeCurrentParty = () => {
    removeLocalStorageItem('current_party');
};

export const getCurrentParty = () => {
    if (isLocalStorageItemExpired('current_party')) return null;

    return getLocalStorageItem('current_party');
};

export const getPartyById = (id) => {
    const useLimit = false;
    const parties = getParties(useLimit);

    const party = parties.find(el => el.id === id);

    if (!party) return null;

    return party;
};
