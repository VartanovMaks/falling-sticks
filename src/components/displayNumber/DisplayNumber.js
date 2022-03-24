import React from 'react';
import '../../App.css';

function DisplayNumber({stickIndex, gameArray}) {
    return (
        <div>
            {stickIndex !== -1 && <h3>{gameArray[stickIndex].stick}</h3>}
        </div>
    );
}

export default DisplayNumber;