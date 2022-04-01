import React from 'react';
import '../../App.css';

function DisplayNumber({stickNumber}) {
    return (
        <div className='column div-number'>
            {stickNumber !== -1 && <p>{stickNumber}</p>}
        </div>
    );
}

export default DisplayNumber;