import React from 'react';

function Square(props) {
    return (
        <button className="date-container" onMouseOver={props.onHover}>
            {props.value}
        </button>
    );
}

export default Square;