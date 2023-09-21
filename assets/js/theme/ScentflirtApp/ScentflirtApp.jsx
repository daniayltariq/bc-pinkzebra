import React, { useState, useEffect } from 'react';
import { useAppContext } from '@shared/context/AppContext';
import { OrderSummary, JoinForm } from '@scentflirt/components/index';
import { addItemsToCart, getCurrentCartId, removeCurrentCart, sendOrderToPinkZebra } from './helper';
import { showAlertModal } from '../global/modal';
import { setLocalStorageWithExpiration } from '../../local-storage-manager';

const ScentflirtApp = () => {
    const { addOnOptionIds, cartId, pzEndpoint, productsAWS } = useAppContext();

    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [selectedKit, setSelectedKit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [orderData, setOrderData] = useState({
        header: 'Order Summary',
        items: [],
        subtotal: {
            price: '0',
            label: 'Order subtotal',
        },
        button: 'Checkout'
    });

    const [checkoutDisabled, setCheckoutDisabled] = useState(true);

    useEffect(() => {
        const updatedOrderData = {
            header: 'Order Summary',
            items: getAllItems(),
            subtotal: {
                price: `${getSubtotal().toFixed(2)}`,
                label: 'Order subtotal',
            },
            button: 'Checkout'
        };

        setOrderData(updatedOrderData);
    }, [selectedAddOns, selectedKit]);

    const handleAddOnSelection = (newItems) => {
        setSelectedAddOns(newItems.addsOn);
    };

    const handleKitSelection = (newKit) => {
        setSelectedKit(newKit.kit)
    };

    const parseKit = () => {
        if (!productsAWS || !productsAWS.length || !selectedKit) { return; }

        const selectedProduct = productsAWS.find(prod => prod.sku === selectedKit);

        if (!selectedProduct) { return; }

        const { name, price } = selectedProduct;
        return {
            name: name,
            price: price,
        };
    };

    const parseAddsOn = () => {
        if (!Array.isArray(selectedAddOns) || !selectedAddOns.length) return [];

        if (!productsAWS || !productsAWS.length || !selectedKit) { return; }
        const products = productsAWS;

        const selectedAddsOnFiltered = products.filter(prod => {
            return selectedAddOns.includes(prod.sku)
        });

        const mappedItems = selectedAddsOnFiltered.map(item => {
            const { name, price } = item;
            return {
                name: name,
                price: price,
            }
        });

        return mappedItems;
    };

    const getSubtotal = () => {
        const allItems = getAllItems();
        return allItems.reduce((total, item) => {
            return total + item.price;
        }, 0);
    };

    const getAllItems = () => {
        const addsOn = parseAddsOn();
        const kitItem = parseKit();

        let allItems = addsOn || [];

        if (kitItem) allItems = [...addsOn, kitItem];

        return allItems;
    };

    const checkout = async () => {
        setIsLoading(true);
        if (checkoutDisabled) {
            showAlertModal('Please, complete all steps before checkout');
            setIsLoading(false);
            return;
        };

        const response = await removeCart();

        if (!response) return;

        if (!productsAWS || !productsAWS.length || !selectedKit) { return; }

        localStorage.removeItem('formDataScentflirt');

        const products = productsAWS;
        const kit = products.find(prod => prod.sku === selectedKit);
        const addsOn = products.filter(prod => {
            return selectedAddOns.includes(prod.sku)
        });

        addsOn.push(kit);

        addsOn.map(addOn => {
            const optionData = addOnOptionIds[addOn.id];
            addOn.optionData = optionData;
            return addOn;
        });

        const addToCartResponse = await addItemsToCart(addsOn);
        const { status } = addToCartResponse;
        if (status === 200) {
            const cartId = await getCurrentCartId();
            setLocalStorageWithExpiration('cartFromJoinProcess', cartId, 365 * 24 * 60 * 60 * 1000);
            try {
                await sendOrderToPinkZebra(cartId, pzEndpoint);
            } catch (e) {
                console.error('Error submiting order to PZ');
            }
            window.location.href = "/checkout";
        } else {
            showAlertModal('Error adding to cart');
            setIsLoading(false);
        }
    };

    const removeCart = async () => {
        if (cartId) {
            const response = await removeCurrentCart(cartId);
            const { status } = response;

            return status === 204 || status === 404;
        }
        return true;
    };

    const onBusinessInfoChange = (error) => {
        setCheckoutDisabled(!!error);
    };

    return (
        <>  
            <div className='is-mobile'>
                <OrderSummary data={orderData}/>
            </div>
            {
                isLoading && <div className="loadingOverlay"></div>
            }
            <JoinForm onAddOnSelection={handleAddOnSelection} onKitSelection={handleKitSelection} onCheckout={checkout} onBusinessInfoChange={onBusinessInfoChange} />
            <OrderSummary data={orderData} onOrderAction={checkout} />
        </>
    );
};

export default ScentflirtApp;
