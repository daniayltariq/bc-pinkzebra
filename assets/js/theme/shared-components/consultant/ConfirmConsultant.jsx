import React, { useState, useEffect } from 'react';
import { getLocalStorageItem } from '../../../local-storage-manager';
import { Consultant } from '@shared/consultant';

const ConfirmConsultant = () => {
    const [consultant, setConsultant] = useState(null);

    useEffect(() => {
        const fetchConsultant = async () => {
            const storedConsultant = await getLocalStorageItem('consultant');
            if (storedConsultant) {
                setConsultant(storedConsultant.value);
            }
        };

        fetchConsultant();
    }, []);


    const toggleFindConsultant = () => {
        const consultantElements = document.querySelectorAll('.find-a-consultant');
        for (let i = 0; i < consultantElements.length; i++) {
            const element = consultantElements[i];
            const currentDisplay = element.style.display;
            element.style.display = currentDisplay === 'none' ? 'block' : 'none';
            if (currentDisplay === 'none')
                $("html, body").animate({ scrollTop: 0 }, "slow");
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="confirm-your-consultant">
            <span className='title'> You currently joining under:</span>
            {
                !!consultant && (
                    <Consultant consultant={consultant} />
                )
            }
            <span className='not-your-consultant'> Not your consultant?</span>
            <a className="change-consultant" onClick={toggleFindConsultant}>
                CHANGE CONSULTANT
            </a>
        </div>
    );
};

export default ConfirmConsultant;
