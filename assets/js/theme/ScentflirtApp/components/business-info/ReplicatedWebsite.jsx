import React from 'react';

const ReplicatedWebsite = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const description =
    'Please choose a website name that you would like at the end of https://www.pinkzebrahome.com/. If the name you choose is already in use, you will have to select another name.';
  const websiteReq =
    'Your website name cannot contain special characters, such as [SPACE], ., ’, ’, *, /, \\, +, -, @, &, #, $, (, ) OR Pink Zebra or any derivative of Pink Zebra.';

  return (
    <div className='business-section replicated-website'>
      <span className='form-section'>Your Pink Zebra Replicated Website</span>
      <span>{description}</span>
      <div className='row'>
        <label>
          <span className='input-description'>Website Name*</span>
          <div className='replicated-website-input'>
            <span>https://www.pinkzebrahome.com/</span>
            <input
              type='text'
              name='website'
              placeholder='PaisleysPZ'
              className='form-input'
              value={data.website || ''}
              onChange={handleChange}
              maxLength={100}
            />
          </div>
        </label>
      </div>
      <span className='website-req'>{websiteReq}</span>
    </div>
  );
};

export default ReplicatedWebsite;
