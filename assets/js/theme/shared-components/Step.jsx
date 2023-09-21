import React, { useEffect, useState } from 'react';

const Step = ({ id, title, children, buttonText, onNextStep, status, toggled, onOpenStep, error }) => {
    const [stepStateIcon, setStepStateIcon] = useState('+');
    const [isOpen, setIsOpen] = useState(toggled || false);
    useEffect(() => {
        setIsOpen(toggled);
        toggled ? setStepStateIcon('-') : setStepStateIcon('+');
    }, [toggled]);

    const toggleStep = () => {
        if (status !== 'active' && status !== 'completed') return;

        isOpen ? setStepStateIcon('+') : setStepStateIcon('-');
        setIsOpen(!isOpen);

        if (!isOpen && onOpenStep) {
            onOpenStep();
        }
    };

    const handleClick = () => {
        if (onNextStep) {
            onNextStep(id);
        }
    }

    return (
        <div className={`step ${status}`}>
            <div className='step-header'>
                <h1>{title}</h1>
                <span className='toggle-step' onClick={toggleStep}>{stepStateIcon}</span>
            </div>

            {isOpen && (
                <>
                    {children}
                    {
                        error && <p className='error'> {error} </p>
                    }
                    <div className='step-actions'>
                        <a
                            className='button button--primary'
                            onClick={handleClick}
                        >
                            {buttonText}
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Step;
