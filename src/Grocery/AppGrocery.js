import React, { useEffect, useState } from 'react'
import AlertGrocery from './AlertGrocery'
import ListGrocery from './ListGrocery'
import './Grocery.css'

const getStorage = () => {
    const list = localStorage.getItem('list')
    if (list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}

export default function AppGrocery() {
    const [input, setInput] = useState("")
    const [list, setList] = useState(getStorage())
    const [status, setStatus] = useState({ "add": false, "deleted": false, edit: false, editId: '' })
    const [alerts, setAlerts] = useState({ show: false, type: '', msg: '' })

    const showAlert = (show, type, msg) => {
        //return { show: show, type: type, msg: msg }
        return { show, type, msg }
    }
    const addList = (e) => {
        e.preventDefault()
        const id = list.length
        const inputValue = { "id": id, "grocery": input }
        setList([...list, inputValue])
        setInput("")
        //using Alerts State
        //setAlerts({ show: true, type: 'Success', msg: `${input} Added` })
        setAlerts(showAlert(true, 'Success', `${input} Added`))

        const newStatus = { ...status }
        newStatus['add'] = true
        setStatus(newStatus)
    }

    const deleteList = (id) => {
        const findItem = list.find((list) => list.id === id)
        setList(
            list.filter((list) => (list.id !== id))
        )
        //using Alerts state
        setAlerts(showAlert(true, 'Danger', `${findItem.grocery} deleted`))

        //using Status state
        const newStatus = { ...status }
        newStatus['deleted'] = true
        setStatus(newStatus)

        //OR
        //s etStatus({...status, deleted:true})
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
        if (alerts.show === true) {
            const timeout = setTimeout(() => {
                setAlerts({ ...alerts, show: false })
            }, 2000)
            return () => clearTimeout(timeout)
        }

        if (status.deleted === true) {
            const timeout = setTimeout(() => {
                setStatus({ ...status, deleted: !status.deleted })
            }, 2000)
            return () => clearTimeout(timeout)
        }

    }, [status, alerts])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <main>
            <section className="section-center">

                <div>
                    <div>
                        <form action="" className="grocery-form" onSubmit={status.edit === true ? editItem : addList} >
                            <h3>Grocery List</h3>

                            {
                                <AlertGrocery status={status} {...alerts} />

                            }
                            <div className="form-control">
                                <input
                                    className="grocery"
                                    placeholder="eg. yam"
                                    value={input}
                                    type="text"
                                    onChange={(e) => { setInput(e.target.value) }}
                                />
                                <button className="submit-btn" >{status.edit === true ? 'Edit' : "Submit"}</button>
                            </div>

                        </form>
                        <div className="grocery-container">
                            <div className="grocery-list">

                                {
                                    list.map((list, i) => (
                                        <ListGrocery key={i} list={list} deleteList={deleteList} editList={editList} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}