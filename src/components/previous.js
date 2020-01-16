import React from 'react';

const Previous = ({ handlePrevious }) => {
    return (
        <button className="previous" onClick={() => handlePrevious}>
            «
        </button>
    )
}

export default Previous;