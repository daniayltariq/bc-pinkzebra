import PageManager from './page-manager';
import nod from './common/nod';
import forms from './common/models/forms';
import { announceInputErrorMessage } from './common/utils/form-utils';
import { getConsultantResultURL } from './consultant/find-a-consultant/find-a-consultant';
import { showAlertModal } from './global/modal';

export default class ContactUs extends PageManager {
    onReady() {
        this.registerContactFormValidation();
        this.bindSearchConsulant();
    }

    registerContactFormValidation() {
        const formSelector = 'form[data-contact-form]';
        const contactUsValidator = nod({
            submit: `${formSelector} input[type="submit"]`,
            tap: announceInputErrorMessage,
        });
        const $contactForm = $(formSelector);

        contactUsValidator.add([
            {
                selector: `${formSelector} input[name="contact_email"]`,
                validate: (cb, val) => {
                    const result = forms.email(val);

                    cb(result);
                },
                errorMessage: this.context.contactEmail,
            },
            {
                selector: `${formSelector} textarea[name="contact_question"]`,
                validate: (cb, val) => {
                    const result = forms.notEmpty(val);

                    cb(result);
                },
                errorMessage: this.context.contactQuestion,
            },
        ]);

        $contactForm.on('submit', event => {
            contactUsValidator.performCheck();

            if (contactUsValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }

    bindSearchConsulant() {
        $('form[data-contact-consultant-form]').submit((ev) => {
            ev.preventDefault();
            const formData = new FormData(ev.target);

            const filteredFormData = new FormData();
            let isEmpty = true;
            for (const [key, value] of formData.entries()) {
                if (value && value.trim().length > 0) {
                    filteredFormData.append(key, value);
                    isEmpty = false;
                }
            }

            if (isEmpty) {
                showAlertModal('Please fill in any input to start to search!');
            } else {
                const url = getConsultantResultURL(filteredFormData);
                window.location.replace(url);
            }
        });
    }
}
