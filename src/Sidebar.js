import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './dataModal';
import logo from './logo.svg'
import './Modal.css'
import useDataLayer from './DataLayer';

const SideBar = () => {
    const { showSidebar, closeSidebar } = useDataLayer()
    return (
        <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} alt="" className="logo" />
                <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
            </div>
            <ul className="links">
                {
                    links.map((link) => {
                        const { id, text, icon } = link
                        return <li key={id}><a href="" >{icon}{text}</a></li>
                    })
                }
            </ul>

            <ul className="social-icons">
                {
                    social.map((link) => {
                        const { id, url, icon } = link
                        return <li key={id}><a href={url} >{icon}</a></li>
                    })
                }
            </ul>
        </aside>
    );
}

export default SideBar;
