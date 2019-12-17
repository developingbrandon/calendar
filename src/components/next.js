import React from 'react';

function Next(props) {
    return (
        <button className="next" onClick={props.handleNext}>
            »
        </button>
    )
}

export default Next;