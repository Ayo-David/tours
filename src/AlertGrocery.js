import React from 'react';

const AlertGrocery = ({ add }) => {
    return (
        <div>
            {
                add ? <h4>List Added</h4> : ""
            }

        </div>
    );
}

export default AlertGrocery;
