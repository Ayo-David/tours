import React from 'react';
import { FaTimes } from 'react-icons/fa';
import useDataLayer from './DataLayer';
const Modal = (props) => {
    const { showModal, closeModal } = useDataLayer()
    return (
        <div className={`modal-overlay ${showModal && 'show-modal'}`}>
            <div className="modal-container">
                <h4>Modal</h4>
                <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes />
                </button>

            </div>
        </div>
    );
}

export default Modal;
