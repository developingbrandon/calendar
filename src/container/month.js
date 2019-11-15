import React, { Component } from 'react';
import moment from 'moment';
import Header from '../components/header';
import Square from '../components/square';

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
        var month = now.format('MMMM');
        var year = now.format('YYYY');
        var today = moment(now).format('YYYY-MMMM-D');
        console.log(today);

        // Make a string of the first day of the current month and year (YYYY-MMM-01)
        var firstOfMonthString = (year + '-' + month + '-1');

        //Find the starting position of the first day of this month (0-6)
        var firstDayPosition = moment(firstOfMonthString, "YYYY-MMMM-D").format('d');


        var dayOfWeek = now.format('ddd');
        var daysInMonth = now.daysInMonth();
        console.log(typeof(daysInMonth));

        // Create an array to store an object for each day with a key and day value
        var dayBlockArray = [];
        var blocksInMonth = 0;

        // Determine if 1st of the month is the first block, if not add additional blocks to total blocks needed.
        firstDayPosition === 0 ? (
            blocksInMonth = daysInMonth
        ) : (
            blocksInMonth = Number(daysInMonth) + Number(firstDayPosition) + Number(1)
        );

        console.log(`Number of blocks in the month is ${blocksInMonth} and the number of days is ${daysInMonth}`);

        // Add key values
        var block = {
            key: null,
            day: null
        };
        for (let i = 0; i < blocksInMonth; i++) {
            dayBlockArray.push(block = {
                key: i,
                day: Number(i - firstDayPosition)
            });
            if (block.day < 0) {
                block.day = null;
            }
        }
        console.log(`Block is ${block.key} and ${block.day}`);
        console.log(`dayBlockArray35 is ${dayBlockArray[35].key}`);

        // Add day number
        var monthOfBlocksArray = [];
        monthOfBlocksArray = dayBlockArray.map(key => {
           if (key <= Number(firstDayPosition + 1)) {
               return block.day = null;
            } else {
                return block.day = Number(key - firstDayPosition);
            }
        });

        console.log('Month of blocks array 1 is: ', monthOfBlocksArray[1]);

        return (
            
            <div>
                <Header month={month} year= {year} />
                <Square firstDayPosition={firstDayPosition} blocksInMonth={blocksInMonth} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
                <p>Today's Day Of the Week: {dayOfWeek}</p>
                <p>How many days in this month: {daysInMonth}</p>
                <p>What number this month is: {month}</p>
                <p>The year is: {year}</p>
                <p>The date string: {firstOfMonthString}</p>
                <p>The first day of the week is on a: {firstDayPosition}</p>
                
            
            </div>
        )
    }
}

export default Month;