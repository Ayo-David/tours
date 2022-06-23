import React from 'react';
import './Modal.css'
import SideBar from './Sidebar';
import Modal from './Modal';
import Home from './HomeModalSideBar';
import { useState } from 'react';

const AppModal = (props) => {
    const [showSidebar, SetShowSidebar] = useState(false)

    const toggleSidebar = () => {
        SetShowSidebar(!showSidebar)
    }
    return (
        <div>
            <Home toggleSidebar={toggleSidebar} />
            <Modal />
            <SideBar showSidebar={showSidebar} />


        </div>
    );
}

export default AppModal;
