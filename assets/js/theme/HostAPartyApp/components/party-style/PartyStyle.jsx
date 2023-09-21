import React, { useEffect, useState } from 'react';
import { Address } from '@host-a-party/components/index';
import { useAppContext } from '@shared/context/AppContext';

const IN_PERSON_ID = 'in-person';

const PartyStyle = ({ onChange, formData }) => {
    const { translations: { styles } } = useAppContext();

    const [selectedOption, setSelectedOption] = useState(styles[0].id);
    const [address, setAddress] = useState(formData?.style?.address || {});

    useEffect(() => {
        const { modality, address: savedAddress } = formData?.style || {};

        if (modality) setSelectedOption(modality);
        if (savedAddress) setAddress(savedAddress);
    }, [formData]);

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelectedOption(value);
        onChange({
            style: {
                modality: value,
                address: address
            }
        });
    };

    const handleAddressChange = (newAddress) => {
        setAddress(newAddress);
        onChange({
            style: {
                modality: selectedOption,
                address: newAddress
            }
        });
    };

    return (
        <div className="new-party-form">
            {styles.map((option) => (
                <div className="new-party-form__wrapper" key={option.id}>
                    <input
                        type="radio"
                        id={option.id}
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={handleOptionChange}
                        className="radio-round"
                    />
                    <div className="new-party-form__description">
                        <label className="name" htmlFor={option.id}>
                            {option.name}
                        </label>
                        <label className="extra" htmlFor={option.id}>
                            {option.description}
                        </label>
                    </div>
                    {selectedOption === IN_PERSON_ID && option.id === IN_PERSON_ID && (
                        <>
                            <Address onChange={handleAddressChange} data={address} />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PartyStyle;
