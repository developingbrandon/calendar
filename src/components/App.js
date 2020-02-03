import React from 'react';
import moment from 'moment';
import Month from './month';
import Header from './header';
import EmptySquare from './empty-square';
import Square from './square';
import '../index.css';

const App = ({ date, today, month, monthLong, year, daysInMonth }) => {
  console.log(`date is ${date} and today is ${today}`);
  
  const handleMouseOver = (e) => {
    e.target.classList.add('hovered');
  }

  const handleMouseOut = (e) => {
    e.target.classList.remove('hovered');
  }

  var targetMonth = date;
  console.log(`App targetMonth is: ${targetMonth}`);

    /* Get the month and year (Jan...) and (20xx)
    var month = date.format('M');
    var monthLong = date.format('MMMM');
    var year = date.format('YYYY');
    var daysInMonth = date.daysInMonth();
    console.log(`month is ${month}`);
    console.log(`monthLong is ${monthLong}`);
    console.log(`year is ${year}`);
    console.log(`daysInMonth is ${daysInMonth}`);*/

    // Make a string of the first day of the current month and year (YYYY-M-01)
    var firstOfMonthString = (year + '-' + month + '-1');

    //Find the starting position of the first day of this month (0-6)
    var  firstDayPosition = moment(firstOfMonthString, "YYYY-M-D").format('d');

    // Create a variable to hold week string:
    var week = [];

    // Include any empty blocks before dates begin:
    for (let emptyDay = 0; emptyDay < firstDayPosition; emptyDay++) {
      week.push(<EmptySquare key={Math.floor((Math.random() * 10000) + 40)} />);
    }

    // Create the calendar

    for (let day = 1; day <= daysInMonth; day++, firstDayPosition++) {
      let date = year + '-' + month + '-' + day;

      // Add a key to each block and a styling class for today:
      if (today === date) {
          week.push(<Square dayId={day} today={true} key={day} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />);
      } else {
          week.push(<Square dayId={day} today={false} key={day} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />);
      }

      // IF end of the week or end of the month
      if (firstDayPosition % 7 === 6 || day === daysInMonth) {
          // Add empty blocks to complete the final week
        if (day === daysInMonth) {
          for (let endEmptyDay = 1; endEmptyDay <= (6 - (firstDayPosition % 7)); endEmptyDay++) {
            week.push(<EmptySquare dayId="" key={Math.floor(Math.random() * 10000)} />);
          }
        }
      }
    }

    return (
      <div className="app">
        <Header month={monthLong} year={year}/>
        <div>
          <Month week={week}/>
        </div>
        
      </div>
    );
  
}

export default App;
