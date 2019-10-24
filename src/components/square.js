import React from 'react';

function Square(props) {
    return (
        <button className="date-container" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
            {props.value}
        </button>
    );
}

export default Square;