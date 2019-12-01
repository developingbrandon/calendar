import React from 'react';

function Square(props) {
    return (
        props.today === true ? (
            <button className="date-container today" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                {props.keyId}
            </button>
        ) : (
            <button className="date-container" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                {props.keyId}
            </button>
        )
    )
}

export default Square;