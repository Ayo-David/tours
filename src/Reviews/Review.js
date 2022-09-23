import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import people from './dataReview'
import './Review.css'

export default function Review() {
    const [index, setIndex] = useState(0)
    const { id, name, image, job, text } = people[index]

    const changeNumber = (num) => {
        if (num < 0) return num = people.length - 1
        if (num === people.length - 1) return num = 0
        return num
    }

    const moveLeft = () => {

        //index === 0 ? setIndex(people.length - 1) : setIndex(index - 1)
        setIndex(changeNumber(index - 1))
    }

    const moveRight = () => {
        index === people.length - 1 ? setIndex(0) : setIndex(index + 1)
    }

    const randomMove = () => {
        let randNum = Math.floor(Math.random() * people.length)
        let num
        index === randNum ? (num = randNum + 1) : num = randNum
        setIndex(num)
        console.log(randNum)
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="qoute-icon"><FaQuoteRight /></span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={moveLeft}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={moveRight}>
                    <FaChevronRight />
                </button>

            </div>
            <button className="random-btn" onClick={randomMove}>Surprise Me</button>
        </article>
    )
}