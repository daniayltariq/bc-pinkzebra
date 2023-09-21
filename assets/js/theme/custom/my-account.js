import { removeConsultantFromStorage } from '../consultant/consultant-helper';
import PageManager from '../page-manager';

export default class MyAccount extends PageManager {
    onReady() {
        this.bindOnLogout();
    }

    bindOnLogout() {
        $('.logout').on('click', () => {
            removeConsultantFromStorage();
        });
    }
}
