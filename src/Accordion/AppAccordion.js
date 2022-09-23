import React from 'react'
import Accordion from './Accordion'
import './accordion.css'

export default function App() {
    return (
        <main>

            <div className="container">
                <div><h3>Questions and Answers</h3></div>
                <Accordion />
            </div>


        </main>
    )
}