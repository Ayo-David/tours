import React, { useState, useContext, createContext } from 'react';

const StateContext = createContext()



export const MyContextProvider = ({ children }) => {
    const [showSidebar, SetShowSidebar] = useState(false)
    const [showModal, SetShowModal] = useState(false)

    const openSidebar = () => {
        SetShowSidebar(true)
    }
    const closeSidebar = () => {
        SetShowSidebar(false)
    }
    const openModal = () => {
        SetShowModal(true)
    }
    const closeModal = () => {
        SetShowModal(false)
    }

    return (
        <StateContext.Provider value={{ showSidebar, openSidebar, closeSidebar, showModal, openModal, closeModal }}>
            {children}
        </StateContext.Provider>
    )
}
const useDataLayer = () => useContext(StateContext)


export default useDataLayer;
