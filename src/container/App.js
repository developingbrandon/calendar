import React from 'react';
import moment from 'moment';
import Month from '../components/month';
import Header from '../components/header';
import EmptySquare from '../components/empty-square';
import Square from '../components/square';
import Previous from '../components/previous';
import Next from '../components/next';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: moment()
    };
   //this.handleNext = this.handleNext.bind(this);
   //this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleMouseOver = (e) => {
    e.target.classList.add('hovered');
    console.log(e + ' is hovered');
  }

  handleMouseOut = (e) => {
    e.target.classList.remove('hovered');
    console.log(e + ' is no longer hovered');
  }

  handlePrevious = () => {
    let prevMonth = this.state.now.subtract(1, 'M');
    this.setState({
      now: prevMonth
    });
    console.log(this.state.now);
  }

  handleNext = () => {
    let nextMonth = this.state.now.add(1, 'M');
    this.setState({
      now: nextMonth
    });
    console.log(this.state.now);
  }

  render() {

    // Get the month and year (Jan...) and (20xx)
    var month = this.state.now.format('M');
    var monthLong = this.state.now.format('MMMM');
    var year = this.state.now.format('YYYY');
    var today = moment().format('YYYY-M-D');
    console.log(today);
    var daysInMonth = this.state.now.daysInMonth();

    // Make a string of the first day of the current month and year (YYYY-M-01)
    var firstOfMonthString = (year + '-' + month + '-1');

    //Find the starting position of the first day of this month (0-6)
    var  firstDayPosition = moment(firstOfMonthString, "YYYY-M-D").format('d');

    // Create a variable to hold week string:
    var week = [];

    // Include any empty blocks before dates begin:
    for (let emptyDay = 1; emptyDay < firstDayPosition; emptyDay++) {
      week.push(<EmptySquare key={Math.floor(Math.random() * 10000)} />);
    }

    // Create the calendar

    for (let day = 1; day <= daysInMonth; day++, firstDayPosition++) {
      let date = year + '-' + month + '-' + day;

      // Add a key to each block and a styling class for today:
      if (today === date) {
          week.push(<Square dayId={day} today={true} key={day} />);
      } else {
          week.push(<Square dayId={day} today={false} key={day} />);
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
          <Previous handlePrevious={this.handlePrevious}/>
          <Month week={week}/>
          <Next handleNext={this.handleNext}/>
        </div>
        
      </div>
    );
  }
}

export default App;
