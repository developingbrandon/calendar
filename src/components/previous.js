import React from 'react';

function Previous(props) {
    return (
        <button className="previous" onClick={props.handlePrevious}>
            «
        </button>
    )
}

export default Previous;