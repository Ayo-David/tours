import React from 'react'
import Tour from './Tour'


export default function Tours({ tours, handleDelete, fetchTours }) {



    return (
        <div className="tour">
            <section>
                <div className="title">
                    <h2>Our Tours</h2>
                    <div className="underline"></div>
                </div>
                <div>
                    {tours.length === 0 ? (
                        <main>
                            <div className="title">
                                <h2>No Tour Left</h2>
                            </div>
                            <button className="btn" onClick={fetchTours} >Refresh</button>
                        </main>
                    )

                        : (
                            tours.map((tour) => {
                                return <Tour key={tour.id} {...tour} handleDelete={handleDelete} />
                            })
                        )
                    }
                </div>
            </section>

        </div>
    )
}