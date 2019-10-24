import React, { Component } from 'react';
import moment from 'moment';
import Header from './header';
import Square from './square';

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

        // Make a string of the first day of the current month and year (YYYY-MMM-01)
        var dateString = (year + '-' + month + '-01');

        //Find the starting position of the first day of this month (0-6)
        var firstDayOfMonth = moment(dateString).format('d');


        var dayOfWeek = now.format('ddd');
        var daysInMonth = now.daysInMonth();
        return (
            
            <div>
                <Header month={month} year= {year} />
                <Square onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
                <Square onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
                <Square onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
                <p>Today's Day Of the Week: {dayOfWeek}</p>
                <p>How many days in this month: {daysInMonth}</p>
                <p>What number this month is: {month}</p>
                <p>The year is: {year}</p>
                <p>The date string: {dateString}</p>
                <p>The first day of the week is on a: {firstDayOfMonth}</p>
            
            </div>
        )
    }
}

export default Month;