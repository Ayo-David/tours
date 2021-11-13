import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListGrocery = ({ list, deleteList, editList }) => {
    const { id, grocery } = list
    return (
        <div>
            <li>{grocery}</li>
            <span onClick={() => deleteList(id)}><FaTrash /></span>
            <div onClick={() => editList(id, grocery)}><FaEdit /></div>

        </div>

    );
}

export default ListGrocery;
