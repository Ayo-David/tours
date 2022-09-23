import React, { useState, useEffect } from 'react'
import data from './dataMenu'
import FoodMenu from './FoodMenu'
import FoodMenuItem from './FoodMenuItem'
import Tab from './MenuTab'


export default function App() {

    const [menubar, setMenuBar] = useState(["All", ...new Set(

        data.map((menu) => {
            const { category } = menu
            //console.log(category)
            return category
        })
    )]
    )

    const [foodmenu, setFoodMenu] = useState(data)

    const handleClick = (title) => {
        title === 'All' ? setFoodMenu(data) : setFoodMenu(data.filter((menu) => (menu.category === title)))
    }

    return (
        <main className="container">
            <section className="menu section">
                <div className="title">
                    <h4>Our Menu</h4>
                    <div className="underline"></div>
                </div>

                <Tab menubar={menubar} handleClick={handleClick} />
                <FoodMenu>
                    {
                        foodmenu.map((menu) => (

                            <FoodMenuItem key={menu.id} {...menu} />
                        ))
                    }
                </FoodMenu>
            </section>
        </main>

    )
}