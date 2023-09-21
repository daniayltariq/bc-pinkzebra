const createImageElement = (img) => {
    const imageContainer = document.createElement('div');

    const imageElement = document.createElement('img');
    imageElement.src = img || 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg'; // Replace with actual image source

    imageContainer.className = 'image';
    imageContainer.appendChild(imageElement);
    return imageContainer;
};

const createTextElement = (context, name) => {
    const textContainer = document.createElement('div');
    textContainer.className = 'information';

    const aNameEl = document.createElement('a');
    aNameEl.href = '/consultant-bio/';
    const spanPartyEl = document.createElement('span');

    const consultantName = document.createTextNode(name);

    const { label } = context.themeSetting.consultant;
    const myParties = document.createElement('a');
    const myPartiesText = document.createTextNode(label.my_parties);
    myParties.appendChild(myPartiesText);
    myParties.className = 'my-parties';

    aNameEl.append(consultantName);
    spanPartyEl.append(myParties);

    textContainer.appendChild(aNameEl);
    textContainer.appendChild(spanPartyEl);

    return textContainer;
};

export const createChangeConsultantSection = (context) => {
    const changeMyConsultantContainer = document.createElement('div');
    changeMyConsultantContainer.className = 'change-my-consultant open-find-consultant';
    const { label } = context.themeSetting.consultant;
    const changeConsultantText = document.createTextNode(label.change_my_consultant);
    changeMyConsultantContainer.appendChild(changeConsultantText);
    const consultantElementMobile = document.querySelector('.consultant-header--mobile');
    if (consultantElementMobile) {
        consultantElementMobile.appendChild(changeMyConsultantContainer);
    }
};

// consultant-header-checkout AD CONSULTANT FOR THIS CLASS

export async function createConsultantSection(context, name, img, targetClass) {
    const consultantContainer = document.createElement('div');
    consultantContainer.className = 'consultant-header--container';

    const imageContainer = createImageElement(img);
    const textContainer = createTextElement(context, name);

    consultantContainer.appendChild(imageContainer);
    consultantContainer.appendChild(textContainer);

    const consultantElement = document.querySelector(targetClass);
    if (consultantElement) {
        consultantElement.appendChild(consultantContainer);
    }
}

export const removeFindAConsultantSection = () => {
    const headerMobile = document.getElementsByClassName('consultant-header--mobile')[0] || null;
    const header = document.getElementsByClassName('consultant-header')[0] || null;
    if (header && headerMobile) {
        header.innerHTML = '';
        headerMobile.innerHTML = '';
    }
};
