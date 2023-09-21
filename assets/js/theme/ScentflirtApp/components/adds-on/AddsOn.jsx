import React, { useState, useEffect } from "react";
import { useAppContext } from '@shared/context/AppContext';
import { AddOnOption } from '@scentflirt/components/index';

const AddsOn = ({ formData, onChange }) => {
    const { productsAWS, addOnIds } = useAppContext();
    if (!productsAWS || !productsAWS.length) { return; }
    const products = productsAWS.filter(product => addOnIds.includes(product.id));

    const [selectedAddsOn, setSelectedAddsOn] = useState(formData.addsOn || []);

    const isOptionSelected = (optionId) => {
        return selectedAddsOn.includes(optionId)
    };

    const handleAddOnSelection = (event, optionId) => {
        const isSelected = event.target.checked;
        if (isSelected) {
            setSelectedAddsOn((prevSelectedAddsOn) => {
                onChange({ addsOn: [...prevSelectedAddsOn, optionId] });
                return [...prevSelectedAddsOn, optionId]
            });
        } else {
            setSelectedAddsOn((prevSelectedAddsOn) => {
                const filteredAddsOn = prevSelectedAddsOn.filter((id) => id !== optionId);
                onChange({ addsOn: filteredAddsOn });
                return filteredAddsOn;
            }
            );
        }
    };

    return (
        <div className='adds-on'>
            {
                products.map(addOn => {
                    const { id, sku } = addOn;
                    return (
                        <AddOnOption
                            key={id}
                            addOn={addOn}
                            isSelected={isOptionSelected(sku)}
                            onSelect={(e) => handleAddOnSelection(e, sku)}
                        />
                    );
                })
            }
        </div>
    );
};

export default AddsOn;
