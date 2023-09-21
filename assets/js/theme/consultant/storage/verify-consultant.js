import { getConsultantFromAttribute, getConsultantFromUrl, isConsultantAlreadySet, isNewConsultant, saveConsultantInLocalStorage } from '../consultant-helper';

/**
 * Verifies the consultant information and saves it to localStorage if necessary.
 * @async
 * @param {object} context - The context object containing the site settings.
 * @throws {Error} Throws an error if there is an issue while verifying the consultant.
 */
export const verifyAndStoreConsultant = async (context) => {
    try {
        const url = window.location.href;
        const consultantInformation = await getConsultantFromUrl(url, context);
        const isNewConsultantFlag = isNewConsultant(consultantInformation);

        if (!isNewConsultantFlag && consultantInformation?.name) return;

        if (isConsultantAlreadySet(url)) return;

        if (isNewConsultantFlag) {
            saveConsultantInLocalStorage({ consultant: consultantInformation, consultant_name: consultantInformation.name });
        } else if (context.customer) {
            const consultantFromAttr = await getConsultantFromAttribute(context) || {};

            if (!consultantFromAttr.name) return;

            const consultant = consultantFromAttr;
            const consultant_name = consultantFromAttr.name;
            const party = consultantFromAttr.party;

            saveConsultantInLocalStorage({ consultant, consultant_name, party });
        }
    } catch (error) {
        console.error('An error occurred while verifying the consultant:', error);
        return true;
    }
};
