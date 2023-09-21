import React from 'react';

const Agreement = ({ data, onChange }) => {
    return (
        <div className='business-section agreement'>
            <div className='row'>
                <input
                    className='form-checkbox'
                    type='checkbox'
                    name='agree'
                    checked={data.agree || false}
                    onChange={onChange}
                    id='agree'
                />
                <label className="form-label" htmlFor='agree'>
                        I confirm that I have read and understand the Pink Zebra at Home Independent Contractor Agreement (“Agreement”). *
                </label>
            </div>
            <span className='form-section download-agreement-title'>Download Agreement</span>
            <a
                className='download-agreement'
                href='/content/us-contract.pdf'
                target='_blank'
                rel='noopener noreferrer'
            >
                Independent Contractor Agreement (US) (“Agreement”)
            </a>
            <a
                className='download-agreement'
                href='/content/cad-contract.pdf'
                target='_blank'
                rel='noopener noreferrer'
            >
                Independent Contractor Agreement (CAD) (“Agreement”)
            </a>
        </div>
    );
};

export default Agreement;
