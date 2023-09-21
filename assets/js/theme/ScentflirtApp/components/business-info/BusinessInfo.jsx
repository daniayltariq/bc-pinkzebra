import React, { useState, useEffect } from 'react';
import { Phone, Tax, ReplicatedWebsite, Agreement } from '@scentflirt/components/index';

const BusinessInfo = ({ onChange, formData, error }) => {

    const [information, setInformation] = useState({
        home_phone: '',
        work_phone: '',
        cell_phone: '',
        ssn_cad: '',
        birthday: null,
        website: '',
        agree: false
    });

    useEffect(() => {
        if (!formData || !formData.businessInfo) return;
        const { home_phone, work_phone, cell_phone, ssn_cad, birthday, website, agree } = formData.businessInfo;
        setInformation({ home_phone, work_phone, cell_phone, ssn_cad, birthday, website, agree });
    }, [formData]);

    const handleInputChange = () => {
        const { name, value, checked } = event.target;

        setInformation(prevFormData => ({
            ...prevFormData,
            [name]: name === 'agree' ? checked : value,
        }));

        onChange({
            businessInfo: { ...information, [name]: name === 'agree' ? checked : value }
        });
    };

    return (
        <div className='business-information'>
            <span className='form-message'>Any field marked with * is required in order to complete your order.</span>
            <Phone data={information} onChange={handleInputChange} />
            <Tax data={information} onChange={handleInputChange} />
            <ReplicatedWebsite data={information} onChange={handleInputChange} />
            <Agreement data={information} onChange={handleInputChange} />
            {
                error && <p className='error'> {error} </p>
            }
        </div>
    );
};

export default BusinessInfo;
