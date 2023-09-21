import React, { useState, useEffect } from 'react';
import { useAppContext } from '@shared/context/AppContext';

let fields = [
    {
        name: 'country',
        label: 'Country',
        type: 'select',
        placeholder: 'Country',
    },
    {
        name: 'address',
        label: 'Address',
        type: 'text',
        placeholder: 'Address',
    },
    {
        name: 'apartment',
        label: 'Apartment/Suite/Building (Optional)',
        type: 'text',
        placeholder: 'Address line 2',
    },
    {
        name: 'city',
        label: 'City',
        type: 'text',
        placeholder: 'City',
    },
    {
        name: 'state',
        label: 'State/Province',
        type: 'select',
        options: [],
        placeholder: 'State/Province',
    },
    {
        name: 'zip',
        label: 'ZIP',
        type: 'text',
        placeholder: '00000',
    },
];

const Address = ({ onChange, data }) => {
    const [formData, setFormData] = useState(data);
    const [inputs, setInputs] = useState([]);
    const [currentCountry, setCurrentCountry] = useState();
    const { translations: { countries } } = useAppContext();

    useEffect(() => {
        setCurrentCountry(data?.country || null);
    }, []);

    useEffect(() => {
        fields = fields.map(field => {
            if (field.name === 'country') {
                field['options'] = countries
            }
            return field;
        });

        setInputs(fields);
    }, [currentCountry]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        onChange({
            ...formData,
            [name]: value,
        });

        if (name === 'country') {
            setCurrentCountry(value);
        }
    };

    const getOptions = (field) => {
        let options = field.options;
        if (field.name === 'state') options = getStateOptions();
        return options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ));
    };

    const getStateOptions = () => {
        const selectedCountry = countries.find((country) => country.value === currentCountry);
        if (selectedCountry) {
            let states = selectedCountry.states.split(',');
            return states.map((state) => ({
                value: state,
                label: state,
            }));
        }
        return [];
    };

    return (
        <div className='address-form'>
            {inputs.map((field) => (
                <label key={field.name}>
                    {field.label}
                    {field.type === 'select' ? (
                        <select className='form-select' name={field.name} value={formData[field.name] || ''} onChange={handleInputChange}>
                            <option value="" disabled>
                                {field.placeholder}
                            </option>
                            {getOptions(field)}
                        </select>
                    ) : (
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            placeholder={field.placeholder}
                            className='form-input'
                        />
                    )}
                </label>
            ))}
            <br />
        </div>
    );
};

export default Address;
