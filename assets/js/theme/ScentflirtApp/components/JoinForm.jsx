import React, { useState, useEffect } from 'react';
import {
  Step,
  ConfirmConsultant,
  PersonalInfo,
  BusinessInfo,
  AddsOn,
  Kit,
} from '@scentflirt/components/index';
import { getLocalStorageItem } from '../../../local-storage-manager';

const getError = (currentStepId, data) => {
  if (currentStepId === 'personalInfo') {
    if (!data)
      return 'Incomplete personal information. Please provide your name, last name, and email.';

    const { name, last_name, email } = data;
    if (!name || !last_name || !email) {
      return 'Incomplete personal information. Please provide your name, last name, and email.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format. Please enter a valid email address.';
    }
  }

  if (currentStepId === 'businessInfo') {
    if (!data) return 'Please provide all the required fields.';

    const {
      home_phone,
      ssn_cad,
      birthday,
      website,
      agree,
    } = data;
    if (
      !home_phone ||
      !ssn_cad ||
      !birthday ||
      !website
    ) {
      return 'Incomplete business information. Please provide all the required fields.';
    }

    if (website.length > 100) {
      return 'The website name is too long.';
    }

    if (!agree) {
      return 'Please agree to the terms and conditions.';
    }

    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    if (isNaN(birthdayDate.getTime()) || birthdayDate > currentDate) {
      return 'Invalid Birthday.';
    }

    const invalidCharactersRegex = /[ .'’*\/\\+\-@&#$()]/;
    const containsInvalidCharacters = invalidCharactersRegex.test(website);
    if (
      containsInvalidCharacters ||
      /(pink\szebra|pz|pinkzebra|pzebra|pinkz)/i.test(website.toLowerCase())
    ) {
      return `Invalid website name. Your website name cannot contain special characters or the term 'Pink Zebra'.`;
    }
  }

  if (currentStepId === 'isConsultantConfirmed') {
    const consultant = getLocalStorageItem('consultant');

    if (!(!!(consultant?.value))) return 'Please select your consultant.';
  }

  return null;
};

const JoinForm = ({
  onAddOnSelection,
  onKitSelection,
  onCheckout,
  onBusinessInfoChange,
}) => {
  const [stepsData, setStepsData] = useState([
    {
      id: 'personalInfo',
      title: '1. Personal Info',
      buttonText: 'Next',
      status: 'active',
      toggled: true,
      component: PersonalInfo,
    },
    {
      id: 'kit',
      title: '2. Confirm your kit',
      buttonText: 'Continue',
      toggled: false,
      status: '',
      component: Kit,
    },
    {
      id: 'addsOn',
      title: '3. Select your add ons',
      buttonText: 'Continue',
      toggled: false,
      status: '',
      component: AddsOn,
    },
    {
      id: 'isConsultantConfirmed',
      title: '4. Confirm your consultant',
      buttonText: 'Confirm',
      status: '',
      toggled: false,
      component: ConfirmConsultant,
    },
    {
      id: 'businessInfo',
      title: '5. Business information',
      buttonText: 'Checkout',
      status: '',
      toggled: false,
      component: BusinessInfo,
    },
  ]);

  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    personalInfo: null,
    kit: null,
    addsOn: [],
    isConsultantConfirmed: false,
    businessInfo: null,
  });

  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const retrieveFormData = () => {
      const storedFormData = localStorage.getItem('formDataScentflirt');
      if (storedFormData) {
        const parsedFormData = JSON.parse(storedFormData);
        setFormData(parsedFormData);
        if (parsedFormData.addsOn) onAddOnSelection({ addsOn: parsedFormData.addsOn });
        if (parsedFormData.kit) onKitSelection({ kit: parsedFormData.kit });
        defineInitialStep(parsedFormData);
      }
      setInitialRender(false);
    };

    retrieveFormData();
  }, []);

  const defineInitialStep = (parsedFormData) => {
    const newStepsData = stepsData.map((step) => {
      const { id } = step;
      if (parsedFormData[id]) step.status = 'active';
      return step;
    });
    setStepsData(newStepsData);
  };

  const onChange = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));

    if (data.addsOn) onAddOnSelection(data);

    if (data.kit) onKitSelection(data);

    if (data.businessInfo) onBusinessInfoChange(getError('businessInfo', data.businessInfo));

    if (!initialRender) {
      localStorage.setItem('formDataScentflirt', JSON.stringify({ ...formData, ...data }));
    }
  };

  const onNextStep = async (currentStepId) => {
    const data = formData[currentStepId];

    const stepError = getError(currentStepId, data);

    if (stepError) {
      setError((prevError) => ({
        ...prevError,
        [currentStepId]: stepError,
      }));
      return;
    }

    setStepsData((prevStepsData) => {
      const currentIndex = prevStepsData.findIndex((step) => step.id === currentStepId);
      if (currentIndex < prevStepsData.length - 1) {
        const nextStepIndex = currentIndex + 1;

        const updatedStepsData = prevStepsData.map((step, index) => {
          if (index === nextStepIndex) {
            return { ...step, status: 'active', toggled: true };
          } else if (index > nextStepIndex) {
            return { ...step, status: '', toggled: false };
          } else {
            return { ...step, status: 'active', toggled: false };
          }
        });

        return updatedStepsData;
      }
      return prevStepsData;
    });

    if (currentStepId === 'businessInfo') {
      onCheckout();
    }
  };

  const onOpenStep = (currentStepId) => {
    setStepsData((prevStepsData) => {
      const currentIndex = prevStepsData.findIndex((step) => step.id === currentStepId);
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

  return (
    <>
      {!initialRender &&
        <div className='join-form'>
          {stepsData.map(({ id, title, buttonText, status, component, toggled }) => {
            const StepComponent = component || null;
            return (
              <Step
                id={id}
                key={id}
                title={title}
                buttonText={buttonText}
                onNextStep={onNextStep}
                status={status}
                toggled={toggled}
                onOpenStep={() => onOpenStep(id)}
                error={error[id] || null}
              >
                {StepComponent && (
                  <StepComponent
                    onChange={onChange}
                    formData={formData}
                  />
                )}
              </Step>
            );
          })}
        </div>
      }
    </>
  );
};

export default JoinForm;
