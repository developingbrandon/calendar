import React from 'react';

function Square(props) {
    const blocksArray = [];
    let i;
    for (i = 0; props.blocksInMonth > i; ++i) {
        blocksArray.push({
            key: i,
            day: Number(i - props.firstDayPosition)
        });
    }

    const emptyBlock = '<td></td>';
    const week = emptyBlock.repeat(Number(props.firstDayPosition));
    console.log(props.firstDayPosition);
    console.log(week);

    blocksArray.map(day => {
        if (blocksArray.day <= 0) {
            return blocksArray.day = null
        } else {
            return blocksArray.day = day
        }
    });

    console.log(blocksArray);
    const button = blocksArray.map(block => {
        return (
            <td key={blocksArray.key}>
                <button className="date-container" onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                    {blocksArray[block]}
                </button>
            </td>
        )
    });
    return (
        <table>
            {button}
        </table>
    )
}

export default Square;