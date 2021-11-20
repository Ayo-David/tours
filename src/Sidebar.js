import React from 'react';
import { links } from './dataModal';
import './Modal.css'

const SideBar = (props) => {
    return (
        <div>
            <ul>
                {
                    links.map((link) => {
                        const { id, text, icon } = link
                        return <li key={id}>{text}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default SideBar;
