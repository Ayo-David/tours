import React, { useState } from 'react'
import './accordion.css'

export default function AccordionItem({ key, question, toggleClick }) {
    const { id, info, title } = question

    const [click, setClick] = useState(false)
    return (
        <article key={key} className="question">
            <button className="hearder" onClick={() => setClick(!click)}>{title}  <span>
                {`${click ? '+' : '-'}`}</span></button>
            {click && <p>{info}</p>}

        </article>
    )
}