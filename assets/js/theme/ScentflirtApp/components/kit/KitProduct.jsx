import React from "react";

const KitProduct = ({ id, name, description, price, defaultImage, onChange, isSelected, openModal }) => {
    const parsedDescription = parseDescription(description);

    return (
        <div className="kit-product">
            <div className="kit-product__content">
                <div className="input-section">
                    <input
                        type="radio"
                        id={id}
                        value={id}
                        className="radio-round"
                        onChange={onChange}
                        checked={isSelected}
                    />
                    <label className="name" htmlFor={id}>
                        {name} <span className="price"> ${price} USD</span>
                    </label>
                </div>
                <div className="kit-product__description">
                    <div className="option-img option-img-mobile">
                        {defaultImage && <img src={defaultImage} alt="" />}
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{ __html: parsedDescription }} />
                </div>
            </div>

            <div className="option-img option-img-desktop">
                {defaultImage && <img src={defaultImage} alt="" />}
            </div>
            <a className="full-details" onClick={() => openModal(id)}>See full item details</a>
        </div>
    );
};

export default KitProduct;

const parseDescription = (description) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    return tempDiv.innerHTML;
};
