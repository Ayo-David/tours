import React, { useEffect, useState } from 'react'
import AlertGrocery from './AlertGrocery'
import ListGrocery from './ListGrocery'
import './Grocery.css'

export default function AppGrocery() {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const [status, setStatus] = useState({ "add": false, "deleted": false, edit: false, editId: '' })

    const addList = (e) => {
        e.preventDefault()
        const id = list.length
        const inputValue = { "id": id, "grocery": input }
        setList([...list, inputValue])
        setInput("")
        const newStatus = { ...status }
        newStatus['add'] = true
        setStatus(newStatus)
    }

    const deleteList = (id) => {
        setList(
            list.filter((list) => (list.id !== id))
        )
        const newStatus = { ...status }
        newStatus['deleted'] = true
        setStatus(newStatus)
    }

    const editList = (id, grocery) => {
        setStatus({ ...status, edit: true, editId: id })
        setInput(grocery)

    }

    const editItem = (e) => {
        e.preventDefault()
        setList(list.map((item) => {
            //const { grocery } = item
            if (item.id === status.editId) {
                return { ...item, grocery: input }
            } else {
                return item //or use spread operator { ...item }
            }
        }))
        setInput("")
        setStatus({ ...status, edit: false })
    }



    useEffect(() => {
        if (status.add === true) {
            setTimeout(() => {
                setStatus({ ...status, add: !status.add })
            }, 2000)
        }

        if (status.deleted === true) {
            setTimeout(() => {
                setStatus({ ...status, deleted: !status.deleted })
            }, 2000)
        }

    }, [status])

    return (
        <main>
            <section className="section-center">

                <div>
                    <div>
                        <form action="" className="grocery-form">
                            <h3>Grocery List</h3>

                            {
                                <AlertGrocery status={status} />

                            }
                            <div className="form-control">
                                <input value={input} type="text" onChange={(e) => { setInput(e.target.value) }} />
                                <button className="submit-btn" onClick={status.edit === true ? editItem : addList}>{status.edit === true ? 'Edit' : "Submit"}</button>
                            </div>

                        </form>
                        <div className="grocery-container">
                            {
                                list.map((list, i) => (
                                    <ListGrocery key={i} list={list} deleteList={deleteList} editList={editList} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}