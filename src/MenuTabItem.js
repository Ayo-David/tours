import React from 'react'
import './Menu.css'


export default function Menu({ title, handleClick }) {

    return (
        <button className="filter-btn" onClick={() => handleClick(title)}>{title}</button>
    )
}