import React from 'react';

function Square(props) {
    const daysArray = [];
    let i;
    for (i = 0; props.daysInMonth > i; ++i) {
        daysArray.push(i);
    }
    console.log(daysArray);
    const button = daysArray.map(day => {
        return (
            <td>
                <button className="date-container" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                    {day}
                </button>
            </td>
        )
    });
    return (
        <td>
            {button}
        </td>
    )
}

export default Square;