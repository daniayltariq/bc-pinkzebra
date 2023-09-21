export const createParty = (party) => {
    const partyElement = document.createElement('li');
    partyElement.classList.add('party');

    const nameElement = document.createElement('h3');
    nameElement.classList.add('name');
    nameElement.setAttribute('data-id', party.id);
    nameElement.textContent = party.name;

    const hostElement = document.createElement('p');
    hostElement.textContent = `HOST: ${party.host}`;

    const endsElement = document.createElement('p');
    endsElement.textContent = `ENDS: ${party.ends}`;

    partyElement.appendChild(nameElement);
    partyElement.appendChild(hostElement);
    partyElement.appendChild(endsElement);

    return partyElement;
};
