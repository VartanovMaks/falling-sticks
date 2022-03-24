import React from 'react';
import '../../App.css';

function DisplayNumber({stickNumber}) {
    return (
        <div>
            {stickNumber && <h3>{stickNumber}</h3>}
        </div>
    );
}

export default DisplayNumber;