import React from 'react';
import { useAppContext } from '@shared/context/AppContext';

const KitProductDetail = ({ product }) => {
    const { scentflirt_products_img } = useAppContext();
    const { name, price, id } = product;
    return (
        <div className="kit-details">
            <div className='kit-details__header'>
                <span className='name'> {name} item list </span>
                <hr></hr>
                <span className='price'> ${price} USD </span>
            </div>
            <div className='kit-details__content'>
                <img src={window.location.origin + scentflirt_products_img[id]} alt='Kit details' />
            </div>
            <div className='kit-details__footer'>
                <p>*Pink Zebra reserves the right to change products in the kit without notice to be of equal or greater value.</p>
            </div>
        </div>
    );
};

export default KitProductDetail;
