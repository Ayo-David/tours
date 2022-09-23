import React, { useEffect, useState } from 'react'
import TabItem from './MenuTabItem'

export default function Menu({ menubar, handleClick }) {


    return (
        <div className="btn-container">

            {

                menubar.map((menu, i) => {
                    //console.log(category)
                    return (
                        <TabItem key={i} title={menu} handleClick={handleClick} />
                    )
                })
            }


        </div>
    )
}