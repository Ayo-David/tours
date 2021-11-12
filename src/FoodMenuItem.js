import React from 'react'

export default function FoodMenuItem({ img, title, price, desc }) {
    return (


        <article className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>N{price}</h4>
                </header>

                <p className='item-text'>{desc}</p>

            </div>
        </article>

    )
}