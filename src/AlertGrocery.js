import React from 'react';

const AlertGrocery = ({ status }) => {
    const { add, deleted } = status
    return (
        <div>
            {
                deleted ? <h4>List delete</h4> : add ? <h4>List Added</h4> : ""
            }

        </div>
    );
}

export default AlertGrocery;
