import React from 'react';
import Block from './header-block';

function Header(props) {
    return (
         <div className="calendar">
            <Block dayOfWeek='Sun'/>
            <Block dayOfWeek='Mon'/>
            <Block dayOfWeek='Tue'/>
            <Block dayOfWeek='Wed'/>
            <Block dayOfWeek='Thu'/>
            <Block dayOfWeek='Fri'/>
            <Block dayOfWeek='Sat'/>
        </div>
    )
}

export default Header;