import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Modal.css'

const Home = (props) => {
    return (
        <main>
            <button className="sidebar-toggle"><FaBars /></button>
            <button className="btn">Show Modal</button>
        </main>
    );
}

export default Home;
