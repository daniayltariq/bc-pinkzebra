import React, { useEffect, useState } from 'react';
import { ThemeOption } from '@host-a-party/components/index';;
import { useAppContext } from '@shared/context/AppContext';

const ChooseYourTheme = ({ onChange, formData }) => {
    const { translations: { themes } } = useAppContext();

    const [selectedOption, setSelectedOption] = useState(themes[0].id);

    useEffect(() => {
        const { theme } = formData;
        setSelectedOption(theme || themes[0].id);

        if (!theme) {
            onChange({
                theme: themes[0].id,
            });
        }
    }, []);

    const handleOptionChange = (event) => {
        const { target: { value } } = event;
        setSelectedOption(value);
        onChange({
            theme: value
        });
    };

    return (
        <div className="new-party-form">
            {themes.map((option) => (
                <ThemeOption
                    key={option.id}
                    option={option}
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange}
                />
            ))}
        </div>
    );
};

export default ChooseYourTheme;
