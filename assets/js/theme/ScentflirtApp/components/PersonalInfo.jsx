import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '@shared/context/AppContext';

const PersonalInfo = ({ formData, onChange, error }) => {
    const { customer } = useAppContext();

    const [information, setInformation] = useState({
        name: '',
        last_name: '',
        email: ''
    });

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (customer && isFirstRender.current) {
            const { email, shipping_address: { first_name, last_name } } = customer;
            setInformation({ name: first_name, last_name: last_name, email });
            onChange({ personalInfo: { name: first_name, last_name: last_name, email } });
        } else {
            getInfoFromForm();
        }
        isFirstRender.current = false;
    }, []);

    useEffect(() => {
        if (!isFirstRender.current && !customer) {
            getInfoFromForm();
        }
    }, [formData]);

    const getInfoFromForm = () => {
        const { name, last_name, email } = formData.personalInfo || {};
        if (name || last_name || email) {
            setInformation({
                name: name || '',
                last_name: last_name || '',
                email: email || ''
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInformation(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));

        onChange({
            personalInfo: { ...information, [name]: value }
        });
    };

    return (
        <div className='personal-information'>
            <span className='form-message'>Any field marked with * is required in order to complete your order.</span>
            <div className='row'>
                <label htmlFor='first-name'>
                    <span className='input-description'>First Name*</span>
                    <input
                        type='text'
                        id='first-name'
                        name='name'
                        placeholder='First Name'
                        className='form-input'
                        onChange={handleInputChange}
                        value={information.name}
                        readOnly={customer ? true : false}
                    />
                </label>
                <label htmlFor='last-name'>
                    <span className='input-description'>Last Name*</span>
                    <input
                        type='text'
                        id='last-name'
                        name='last_name'
                        placeholder='Last Name'
                        className='form-input'
                        onChange={handleInputChange}
                        value={information.last_name}
                        readOnly={customer ? true : false}
                    />
                </label>
            </div>
            <div className='row'>
                <label htmlFor='email'>
                    <span className='input-description'>Email Address*</span>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email Address'
                        className='form-input'
                        onChange={handleInputChange}
                        value={information.email}
                        readOnly={customer ? true : false}
                    />
                </label>
            </div>
            {
                error && <p className='error'> {error} </p>
            }
        </div>
    );
};

export default PersonalInfo;
