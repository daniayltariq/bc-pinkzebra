import React from "react";

const Modal = ({ children, onClose }) => {
    return (
        <div className="react-modal">
            <div className="react-modal-content">
                <button className="close-button" onClick={onClose}>
                    <span>X</span>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
