import React, { useState } from 'react'
import data from './dataAccordion'
import './accordion.css'
import AccordionItem from './AccordionItem'

export default function Accordion() {
    const [questions, setQuestions] = useState(data)


    const toggleClick = () => {
        // setClick(!click)
    }

    return (
        <div>
            {questions.map((question, i) => {
                return (
                    <AccordionItem key={i} question={question} toggleClick={toggleClick} />
                )
            })}
        </div>
    )
}