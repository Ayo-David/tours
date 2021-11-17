import React, { useRef, useState, useEffect } from 'react';
import { links, social } from './dataNavBar'
import './NavBar.css'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa';



const NavBar = (props) => {
    const [showlinks, setShowLinks] = useState(false)
    const linkRef = useRef(null)
    const linkContainerRef = useRef(null)


    const handleToggle = () => {
        setShowLinks(!showlinks)
        // const height = linkRef.current.ScrollHeight
        // console.log(height)
    }

    useEffect(() => {
        const linkHeight = linkRef.current.getBoundingClientRect().height
        console.log(linkHeight)
        showlinks ? linkContainerRef.current.style.height = `${linkHeight}px` : linkContainerRef.current.style.height = '0px'
    }, [showlinks])


    return (
        <nav>
            <div className="nav-center">

                <div className="nav-header">
                    <img className="logo" src={logo} alt="logo" />
                    <button className="nav-toggle" onClick={() => handleToggle()}><FaBars /></button>

                </div>
                <div ref={linkContainerRef} className="links-container" style={showlinks ? { height: linkRef.current.scrollHeight } : { height: "0px" }}>
                    {/* <div ref={linkContainerRef} className="links-container" > */}
                    <ul ref={linkRef} className="links">
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
