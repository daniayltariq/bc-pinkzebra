import React, { useState } from 'react';

const fraganceText = [
    'SEE FULL FRAGANCE DETAILS',
    'SEE LESS',
];

const ThemeOption = ({ option, selectedOption, handleOptionChange }) => {
    const [showFragances, setShowFragances] = useState(false);
    const [fraganceTextIndex, setFraganceTextIndex] = useState(0);

    const onToggleFragance = () => {
        setShowFragances(!showFragances);
        fraganceTextIndex === 0 ? setFraganceTextIndex(1) : setFraganceTextIndex(0);
    };

    const { id, description, fragances, name, img } = option;
    return (
        <div className="new-party-form__wrapper theme-option" key={id}>
            <div className='option-content'>
                <div className='new-party-form__input'>
                    <input
                        type="radio"
                        id={id}
                        value={id}
                        checked={selectedOption === id}
                        onChange={handleOptionChange}
                        className="radio-round"
                    />
                    <label className="name" htmlFor={id}>
                        {name}
                    </label>
                </div>
                <div className="new-party-form__description">
                    <div className='option-img option-img-mobile'>
                        {
                            img &&
                            <img src={img}></img>
                        }
                    </div>
                    <label className="extra" htmlFor={id}>
                        {description}
                    </label>
                    {
                        showFragances && <span className='fragances'>{fragances}</span>
                    }
                    <span className='see-fragances' onClick={() => onToggleFragance()}>
                        {fraganceText[fraganceTextIndex]}
                    </span>
                </div>
            </div>

            <div className='option-img option-img-desktop'>
                {
                    img &&
                    <img src={img}></img>
                }
            </div>
        </div>
    );
};

export default ThemeOption;
