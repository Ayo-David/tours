import React, { useState } from 'react'
import AlertGrocery from './AlertGrocery'
import ListGrocery from './ListGrocery'

export default function AppGrocery() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const [add, setAdd] = useState(false)

    const addList = (e) => {
        e.preventDefault()
        setList([...list, input])
        setInput("")
        setAdd(true)
    }

    return (
        <main>
            <div>
                <h4>Grocery List</h4>
                <div className="underline"></div>
                <div>
                    <AlertGrocery add={add} />
                    <form action="">

                        <input value={input} type="text" onChange={(e) => { setInput(e.target.value) }} />
                        <button onClick={addList}>Submit</button>
                    </form>
                    <div>
                        {
                            list.map((list, i) => (
                                <ListGrocery key={i} list={list} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </main>

    )
}