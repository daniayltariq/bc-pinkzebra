import React, { useEffect, useState } from 'react';
import { useAppContext } from '@shared/context/AppContext';

const PartyType = ({ onChange, formData }) => {
    const { translations: { types } } = useAppContext();

    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const { type } = formData;
        setSelectedOption(type || types[0].id);

        if (!type) {
            onChange({
                type: types[0].id,
            });
        }
    }, []);

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setSelectedOption(value);
        onChange({
            type: value,
        });
    };

    return (
        <div className="new-party-form">
            {types.map((option) => (
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
                </div>
            ))}
        </div>
    );
};

export default PartyType;
