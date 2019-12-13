import React from 'react';

function EmptySquare(props) {
    return (
        <button className="date-container empty" onMouseOver="">
            {props.dayId}
        </button>
    )
}

export default EmptySquare;