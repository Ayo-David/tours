import React from 'react';
import './Grocery.css'

const AlertGrocery = ({ status, show, type, msg }) => {
    const { add, deleted } = status
    return (
        <div>
            {
                // deleted ? <h4>List delete</h4> : add ? <h4>List Added</h4> : ""
                show && type === 'Success' ? <h4 className="Sucess">{msg}</h4> : show && type === "Danger" ? <h4 className="Danger">{msg}</h4> : ""
            }

        </div>
    );
}

export default AlertGrocery;
