import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const ListGrocery = ({ key, list }) => {
    return (
        <div>
            <li>{list}</li>
            <span onClick={() => deleteList(key)}>X</span>
            <FaChevronRight />
        </div>

    );
}

export default ListGrocery;
