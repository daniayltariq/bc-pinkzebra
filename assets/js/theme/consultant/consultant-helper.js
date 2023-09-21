import { getData } from '../../api-helper';
import { getDataFromGraphql } from '../../graph-ql-service';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageWithExpiration } from '../../local-storage-manager';
import { ConsultantDTO } from './consultantDTO';

export const getConsultantFromUrl = async (url, context) => {
    const { aws_cloudfront_url } = context.themeSetting;
    const urlSearchParams = new URLSearchParams(new URL(url).search);
    const consultantName = urlSearchParams.get('consultant');

    if (!consultantName) return;

    const response = await getData(`${aws_cloudfront_url}getByWebsite?website=${consultantName}`);

    if (!response.rep) return;

    return new ConsultantDTO(response);
};

export const getConsultantFromSettings = async (context) => {
    const { aws_cloudfront_url } = context.themeSetting;
    const { default_consultant } = context.themeSetting.consultant;

    if (!default_consultant) return false;

    const response = await getData(`${aws_cloudfront_url}getByWebsite?website=${default_consultant}`);

    if (!response.rep) return;

    return new ConsultantDTO(response);
};

export const getConsultantFromAttribute = async (context) => {
    if (!context.customer) return;
    const { aws_cloudfront_url, aws_url } = context.themeSetting;
    const token = context.storefrontAPIToken;
    const customerAttr = await getDataFromGraphql(context, 'getCustomerAttr', token);
    const { value } = customerAttr.customer.attributes.attribute;

    if (!value) return;

    const consultantById = await getData(`${aws_url}search?repID=${value}`);

    if (!consultantById?.rep) return;

    const response = await getData(`${aws_cloudfront_url}getByWebsite?website=${consultantById?.rep?.website}`);

    if (!response.rep) return;

    return new ConsultantDTO(response);
};

export const saveConsultantInLocalStorage = ({ consultant, consultant_name, party = '' }) => {
    setLocalStorageWithExpiration('consultant', consultant, 24 * 60 * 60 * 1000);
    setLocalStorageWithExpiration('name', consultant_name, 24 * 60 * 60 * 1000);
    setLocalStorageWithExpiration('party', party, 24 * 60 * 60 * 1000);
};

export const isNewConsultant = (consultantFromUrl) => {
    let isNew = false;
    const currentConsultantName = getLocalStorageItem('name')?.value;

    if (!currentConsultantName) isNew = true;

    const urlSearchParams = new URLSearchParams(new URL(window.location.href).search);
    const consultant_name = urlSearchParams.get('consultant');

    const consultantApiResponse = consultantFromUrl?.name || null;

    if (currentConsultantName !== consultant_name) isNew = true;

    if (!consultant_name || !consultantApiResponse) isNew = false;

    return isNew;
};

export const isConsultantAlreadySet = (url) => {
    const currentConsultant = getLocalStorageItem('consultant')?.value;
    const urlSearchParams = new URLSearchParams(new URL(url).search);
    const consultantNameFromUrl = urlSearchParams.get('consultant');

    if (currentConsultant?.name && !consultantNameFromUrl) {
        return true;
    }
    return false;
};

export const removeConsultantFromStorage = () => {
    removeLocalStorageItem('name');
    removeLocalStorageItem('consultant');
};
