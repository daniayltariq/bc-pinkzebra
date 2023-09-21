import React from 'react';

const Phone = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className='business-section phone'>
      <span className='form-section'>Phone</span>
      <div className='row'>
        {phoneInputs.map(({ name, type, label, placeholder }) => (
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
            />
          </label>
        ))}
      </div>
    </div>
  );
};

const phoneInputs = [
  {
    name: 'home_phone',
    label: 'Home Phone*',
    type: 'phone',
    placeholder: '(+1)000-000-0000',
  },
  {
    name: 'work_phone',
    label: 'Work Phone',
    type: 'phone',
    placeholder: '(+1)000-000-0000',
  },
  {
    name: 'cell_phone',
    label: 'Cell Phone',
    type: 'phone',
    placeholder: '(+1)000-000-0000',
  },
];

export default Phone;
