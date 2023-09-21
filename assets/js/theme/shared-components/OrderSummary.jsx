import React, { useState } from 'react';

const OrderSummary = ({ onOrderAction, data }) => {
    const [showItems, setShowItems] = useState(true);
    const [toggleIcon, setToggleIcon] = useState('-');

    if (!data) return;

    const toggleItems = () => {
        showItems ? setToggleIcon('+') : setToggleIcon('-');
        setShowItems(!showItems);
    };

    const { header, items, button, subtotal } = data;
    return (
        <div className='order-summary-react'>
            <div className='order-summary-react__header'>
                <h1> {header} </h1>
            </div>
            {showItems &&
                <div className='order-summary-react__content'>
                    <ol>
                        {
                            items.map(item => {
                                const { name, price } = item;
                                return (
                                    <li className='item' key={name}>
                                        <span className='name'> {name} </span>
                                        <span className='price'> ${price} </span>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            }
            <div className={`order-summary-react__footer ${showItems ? 'margin-top-auto' : ''}`}>
                <div className='subtotal'>
                    <span className='label'> {subtotal.label}</span>
                    <span className='price'> ${subtotal.price} </span>
                </div>
                {onOrderAction &&
                    <a className='order-action button button--secondary' onClick={onOrderAction}> {button} </a>
                }

                <div className='is-mobile'>
                    <a className='view-cart' onClick={toggleItems}> View cart </a> <span className='view-cart-icon'> {toggleIcon} </span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
