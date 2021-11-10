import React from 'react'
import Review from './Review'
import './Review.css'
import { faChevron } from 'react-icons/fa'

export default function App() {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="underline">
                    </div>
                </div>
                <Review />
            </section>
        </main>
    )
}