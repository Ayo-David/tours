import React from 'react';
import logo from './images/logo.svg'
import sublinks from './dataSubmenu';
import { FaBars } from 'react-icons/fa';
import './SubMenu.css'

const NavBar = (props) => {
    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="Stripe" className="nav-logo" />
                    <button className="btn toggle-btn"><FaBars /></button>
                </div>
            </div>
            <ul className="nav-links">
                {
                    sublinks.map((link, index) => {
                        const { page } = link
                        return (
                            <li key={index} ><button className="link-btn">{page}</button></li>
                        )
                    })
                }
            </ul>

        </nav>
    );
}

export default NavBar;
