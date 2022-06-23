import React from 'react';
import './Modal.css'
import SideBar from './Sidebar';
import Modal from './Modal';
import Home from './HomeModalSideBar';

const AppModal = (props) => {
    return (
        <div>
            <Home />
            <SideBar />
            <Modal />
        </div>
    );
}

export default AppModal;
