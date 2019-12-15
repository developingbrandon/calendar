import React from 'react';
import Block from './header-block';

function Header(props) {
    return (
         <div className="calendar">
             <div>
                 <span>{props.month} {props.year}</span>
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