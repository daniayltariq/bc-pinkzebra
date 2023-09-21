import React from "react";

const AddOnOption = ({ addOn, onSelect, isSelected }) => {
    const { id, name, description, price } = addOn;
    const parsedDescription = parseDescription(description);

    return (
        <div className="addOn-option" key={id}>
            <div className='addOn-option__content'>
                <div className='input-section'>
                    <input
                        type="checkbox"
                        id={id}
                        value={id}
                        className="form-checkbox"
                        onChange={onSelect}
                        checked={isSelected}
                    />
                    <label className="name form-label" htmlFor={id}>
                        + {name} <span className="price"> ${price} USD</span>
                    </label>
                </div>
                <div className="addOn-option__description">
                    <label className="extra" dangerouslySetInnerHTML={{ __html: parsedDescription }} />
                </div>
            </div>
        </div>
    )
};

export default AddOnOption;

const parseDescription = (description) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    return tempDiv.innerHTML;
};
