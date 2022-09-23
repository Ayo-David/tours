import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Modal.css'
import useDataLayer from './DataLayer';

const Home = ({ toggleSidebar }) => {
    const { openSidebar, openModal } = useDataLayer()
    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}><FaBars /></button>
            <button className="btn" onClick={openModal}>Show Modal</button>
        </main>
    );
}

export default Home;
