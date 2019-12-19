import React from 'react';
import Block from './block';
import Next from './next';
import Previous from './previous';

function Header(props) {
    return (
         <div className="header-container">
             <div className="header-title">
                 <Previous handlePrevious={props.handlePrevious} />
                 <span className="month-year">{props.month} {props.year}</span>
                 <Next handleNext={props.handleNext} />
             </div>
             <div>
                <Block dayOfWeek='Sun'/>
                <Block dayOfWeek='Mon'/>
                <Block dayOfWeek='Tue'/>
                <Block dayOfWeek='Wed'/>
                <Block dayOfWeek='Thu'/>
                <Block dayOfWeek='Fri'/>
                <Block dayOfWeek='Sat'/>
            </div>
        </div>
    )
}

export default Header;