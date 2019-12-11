import React from 'react';

function Square(props) {
    if (props.day === true) {
       return (
        <button className="date-container header">
            {props.day}
        </button>
       )    
    } else {
        return (
        
            props.today === true ? (
                <button className="date-container today" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                    {props.dayId}
                </button>
            ) : (
                <button className="date-container" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                    {props.dayId}
                </button>
            )
        )
    }
    
}

export default Square;