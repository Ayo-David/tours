import React, { useRef } from 'react';
import { links, social } from './dataNavBar'
import './NavBar.css'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const NavBar = (props) => {
    const [showlinks, setShowLinks] = useState(false)
    const linkRef = useRef()

    const handleToggle = () => {
        setShowLinks(!showlinks)
        // const height = linkRef.current.ScrollHeight
        // console.log(height)
    }


    return (
        <nav>
            <div className="nav-center">

                <div className="nav-header">
                    <img className="logo" src={logo} alt="logo" />
                    <button className="nav-toggle" onClick={() => handleToggle()}><FaBars /></button>

                </div>
                <div ref={linkRef} className="links-container" style={showlinks ? { height: linkRef.current.scrollHeight } : { height: "0px" }}>
                    <ul className="links">
                        {
                            showlinks && (

                                links.map((link) => {
                                    const { id, url, text } = link
                                    return <li key={id}><a href={url}>{text}</a></li>
                                })
                            )
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                    {
                        social.map((link) => {
                            const { id, icon, url } = link
                            return <li key={id}><a href={url}>{icon}</a></li>
                        })
                    }
                </ul>
            </div>
        </nav >
    );
}

export default NavBar;
