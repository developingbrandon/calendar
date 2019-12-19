import React from 'react';

function Month(props) {
    return (
        <div className="calendar">
            {props.week}
        </div>
    );
}


export default Month;