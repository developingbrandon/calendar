import React, { Component } from 'react';
import moment from 'moment';
//import Header from '../components/header';
//import Square from '../components/square';

class Month extends Component {
    
    handleMouseOver = (e) => {
        e.target.classList.add('hovered');
        console.log(e + ' is hovered');
    }
    handleMouseOut = (e) => {
        e.target.classList.remove('hovered');
        console.log(e + ' is no longer hovered');
    }
    render() {
        // Get the current date/time
        var now = moment();

        // Get the month and year (Jan...) and (20xx)
        var month = now.format('M');
        var year = now.format('YYYY');
        var today = moment(now).format('YYYY-M-D');
        var daysInMonth = now.daysInMonth();

        // Make a string of the first day of the current month and year (YYYY-M-01)
        var firstOfMonthString = (year + '-' + month + '-1');

        //Find the starting position of the first day of this month (0-6)
        var firstDayPosition = moment(firstOfMonthString, "YYYY-M-D").format('d');

        // Create array to hold each week:
        var weeks = [];

        // Create a variable to hold week string:
        var week = '';

        // Make an empty block
        const emptyBlock = '<td></td>';

        // Include any empty blocks before dates begin:
        week = emptyBlock.repeat(firstDayPosition);

        // Create the calendar

        for (let day = 1; day <= daysInMonth; day++, firstDayPosition++) {
            let date = year + '-' + month + '-' + day;

            // Add a key to each block and a styling class for today:
            if (today === date) {
                week += '<td key=' + day + ' className="today">' + {day};
            } else {
                week += '<td key=' + day + ' >' + {day};
            }

            week += '</td>';

            // IF end of the week or end of the month
            if (firstDayPosition % 7 === 6 || day === daysInMonth) {
                // Add empty blocks to complete the final week
                if (day === daysInMonth) {
                    week += emptyBlock.repeat(6 - (firstDayPosition % 7));
                }

                // Store week in weeks array:
                weeks = '<tr>' + week + '</tr>';

                // Clear week for the next week:
                week = '';
            }
        }

        return (
            
            <div>
                {weeks}
            </div>
        )
    }
}

export default Month;