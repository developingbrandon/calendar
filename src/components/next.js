import React from 'react';

function Next() {
    return (
        <button className="next" onClick={props.handleNext}>
            »
        </button>
    )
}

export default Next;