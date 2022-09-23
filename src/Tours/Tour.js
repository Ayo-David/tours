import React from 'react'
import { useState } from 'react'

export default function Tour({ id, image, info, name, price, handleDelete }) {
    const [readMore, setReadMore] = useState(false)


    const handleReadMore = () => {
        let readmore = !readMore
        setReadMore(readmore)
    }

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4 className="tour-title">{name}</h4>
                    <h4 className="tour-price">N{price}</h4>
                </div>
                <p>{readMore ? info : info.substring(0, 200) + '...'}<button onClick={handleReadMore}>{readMore ? 'Read Less' : 'Read More'}</button></p>
                <button className="delete-btn" onClick={() => handleDelete(id)}>Not Interested</button>
            </footer>
        </article>
    )
}