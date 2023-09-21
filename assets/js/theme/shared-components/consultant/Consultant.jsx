import React from 'react';

const Consultant = ({ consultant }) => {

    if (!consultant) return;

    const { name, city, state, img } = consultant;

    return (
        <>
            <div className="consultant">
                <div className='image'>
                    <img src={img} alt={name} />
                </div>
                <div className='info'>
                    <span className='name'>{name}</span>
                    <span className='location'>{`${city}, ${state}`}</span>
                </div>
            </div>
        </>
    );
};

export default Consultant;
