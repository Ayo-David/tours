import React, { useState, useContext, createContext } from 'react';

const StateContext = createContext()



export const MyContextProvider = ({ children }) => {
    const [showSidebar, SetShowSidebar] = useState(false)
    const [showModal, SetShowModal] = useState(false)
    const [showSubMenu, SetShowSubMenu] = useState(false)

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
    const openSubMenu = () => {
        SetShowSubMenu(true)
    }
    const closeSubMenu = () => {
        SetShowSubMenu(false)
    }

    return (
        <StateContext.Provider value={{
            showSidebar,
            openSidebar,
            closeSidebar,
            showModal,
            openModal,
            closeModal,
            showSubMenu,
            openSubMenu,
            closeSubMenu
        }}>
            {children}
        </StateContext.Provider>
    )
}
const useDataLayer = () => useContext(StateContext)


export default useDataLayer;
