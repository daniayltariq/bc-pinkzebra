import React from 'react';

const Tax = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "ssn_cad" && !/^\d+$/.test(value)) {
      return;
    }

    onChange(name, value);
  };

  const description =
    'We must collect your SSN/Tax ID in order to provide you with the appropriate tax documents and to ensure we are in compliance with local tax authorities.';

  return (
    <div className='business-section tax'>
      <span className='form-section'>Tax Information</span>
      <span className='form-section__description'>{description}</span>
      <div className='row'>
        {taxInputs.map(({ name, type, label, placeholder, maxDate }) => (
          <label key={name}>
            <span className='input-description'>{label}</span>
            <input
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
              className='form-input'
              value={data[name] || ''}
              onChange={handleChange}
              max={maxDate ? maxDate.toISOString().split('T')[0] : undefined}
              inputMode={'none'}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

const taxInputs = [
  {
    name: 'ssn_cad',
    label: 'SSN (US) OR SIN (CAD)*',
    type: 'text',
    placeholder: '000000000',
  },
  {
    name: 'birthday',
    label: 'BIRTHDAY*',
    type: 'date',
    placeholder: 'DD/MM/YYYY',
    maxDate: new Date(),
  },
];

export default Tax;
