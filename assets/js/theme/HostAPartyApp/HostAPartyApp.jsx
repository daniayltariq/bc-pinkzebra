import React, { useState, useEffect } from 'react';
import { Step, PartyType, PartyStyle, ChooseYourTheme, ConfirmConsultant, PickDate } from '@host-a-party/components/index';
import { useAppContext } from '@shared/context/AppContext';
import { defaultModal } from "../global/modal";
import { getLocalStorageItem } from '../../local-storage-manager';

const HostAPartyApp = () => {
    const { pzAPIEndpoint } = useAppContext();
    const modal = defaultModal();

    const [stepsData, setStepsData] = useState([{ id: 'type', title: '1. Party Type', component: PartyType, buttonText: 'Next', status: 'active', toggled: true },
    { id: 'style', title: '2. Party Style', component: PartyStyle, buttonText: 'Next', status: '', toggled: false },
    { id: 'theme', title: '3. Choose Your Theme', component: ChooseYourTheme, buttonText: 'Continue', status: '', toggled: false },
    { id: 'isConsultantConfirmed', title: '4. Confirm Your Consultant', component: ConfirmConsultant, buttonText: 'Confirm', status: '', toggled: false },
    { id: 'date', title: '5. Pick A Date', component: PickDate, buttonText: 'Book My Party', status: '', toggled: false }]);

    const [formData, setFormData] = useState({
        type: null,
        style: null,
        theme: null,
        isConsultantConfirmed: false,
        date: null,
    });

    const [stepCompletion, setStepCompletion] = useState({});

    useEffect(() => {
        const updateStepCompletion = () => {
            const updatedCompletion = {};
            stepsData.forEach((step) => {
                updatedCompletion[step.id] = checkStep(step.id);
            });
            setStepCompletion(updatedCompletion);
        };

        updateStepCompletion();
    }, [stepsData, formData]);

    useEffect(() => {
        const retrieveFormData = () => {
            const storedFormData = localStorage.getItem('formData');
            if (storedFormData) {
                const parsedFormData = JSON.parse(storedFormData);
                setFormData(parsedFormData);
                defineInitialStep(parsedFormData);
            }
        };

        retrieveFormData();
    }, []);

    const onChange = (data) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            ...data,
        }));
    };

    const onNextStep = async (currentStepId) => {
        setStepsData(prevStepsData => {
            const currentIndex = prevStepsData.findIndex(step => step.id === currentStepId);
            if (currentIndex < prevStepsData.length - 1) {
                let nextStepIndex = currentIndex + 1;

                if (currentStepId === 'type' && formData.type === 'traditional') {
                    nextStepIndex = currentIndex + 2;
                }

                const updatedStepsData = prevStepsData.map((step, index) => {
                    if (index === nextStepIndex) {
                        return { ...step, status: 'active',  toggled: true };
                    }
                    else if (index > nextStepIndex) {
                        return { ...step, status: '', toggled: false };
                    }
                    else if (step.id === 'style' && formData.type === 'traditional') {
                        return { ...step, status: '',  toggled: false };
                    }
                    else {
                        return { ...step, status: 'active',  toggled: false };
                    }
                });

                return updatedStepsData;
            }

            return prevStepsData;
        });

        if (currentStepId === 'isConsultantConfirmed') {
            onChange({ isConsultantConfirmed: true });
            localStorage.setItem('formData', JSON.stringify({ ...formData, isConsultantConfirmed: true }));
        }

        if (currentStepId === 'date') {
            await createParty();
        } else {
            localStorage.setItem('formData', JSON.stringify({ ...formData }));
        }
    };

    const onOpenStep = (currentStepId) => {
        setStepsData(prevStepsData => {
            const currentIndex = prevStepsData.findIndex(step => step.id === currentStepId);
            if (currentIndex < prevStepsData.length - 1) {
                const updatedStepsData = prevStepsData.map((step, index) => {
                    if (index === currentIndex) {
                        return { ...step, status: 'active', toggled: true };
                    } else if (index > currentIndex) {
                        return { ...step, status: '', toggled: false };
                    } else {
                        return { ...step, status: 'active', toggled: false };
                    }
                });

                return updatedStepsData;
            }
            return prevStepsData;
        });
    };

    const defineInitialStep = (parsedFormData) => {
        const newStepsData = stepsData.map(step => {
            const { id } = step;
            if (!!parsedFormData[id]) step.status = 'active';
            return step;
        });
        setStepsData(newStepsData);
    };

    const checkStep = (stepId) => {
        const data = formData[stepId];
        let response = !!data;
        if (stepId === 'style' && formData['style'] && formData['style'].modality === 'in-person') {
            const { country, state, city, zip, address } = formData['style'].address;
            response = (!!country && !!state && !!city && !!zip && !!address);
        } else if (stepId === 'isConsultantConfirmed') {
            const consultant = getLocalStorageItem('consultant');
            return (consultant && consultant.value);
        }

        return response;
    };

    const redirectToHome = () => {
        window.location.href = window.location.origin;
    };

    const openModal = (className, text) => {
        modal.open();
        modal.updateContent(`
        <div class=${className}>
            <span>${text}</span>
        </div>`);
    }

    const createParty = async () => {
        try {
            localStorage.removeItem('formData');
            const response = await fetch(`${pzAPIEndpoint}/host-a-party`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('ok!');
                const message = 'The party has been successfully created!';
                openModal('host-party-message__success', message);
                modal.onClose = redirectToHome;
            } else {
                const errorData = await response.json();
                console.error(errorData);
                const message = 'Oops! There seems to be an error creating the party. We kindly request you to verify the data you entered.';
                openModal('host-party-message__error', message);
            }
        } catch (error) {
            console.log('Error creating party:', error);
            const message = 'Oops! There seems to be an error creating the party. We kindly request you to verify the data you entered.';
            openModal('host-party-message__error', message);
        }
    };

    return (
        <>
            <h1 className='new-party-header'> NEW PARTY REQUEST </h1>
            <div className='host-a-party'>
                <div className="host-a-party-main-wrapper">
                    {stepsData.map(step => {
                        const { id, title, buttonText, status, toggled } = step;
                        return (
                            <Step
                                id={id}
                                key={id}
                                title={title}
                                buttonText={buttonText}
                                onNextStep={onNextStep}
                                status={status}
                                isStepCompleted={stepCompletion[id]}
                                toggled={toggled}
                                onOpenStep={() => onOpenStep(id)}
                            >
                                <step.component onChange={onChange} formData={formData} />
                            </Step>
                        )
                    })}
                </div>
                {/* <OrderSummary onOrderAction={createParty} data={orderSummaryConfig} /> */}
            </div>
        </>
    );
};

export default HostAPartyApp;
