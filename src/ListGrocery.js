import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

const ListGrocery = ({ list, deleteList, editList }) => {
    const { id, grocery } = list
    return (
        <article className="grocery-item">

            <p className="title">{grocery}</p>
            <div className="btn-container">
                <button type="button" className="delete-btn" onClick={() => deleteList(id)}><FaTrash /></button>
                <button type="button" className="edit-btn" onClick={() => editList(id, grocery)}><FaEdit /></button>
            </div>
        </article>


    );
}

export default ListGrocery;
