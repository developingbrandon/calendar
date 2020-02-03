import React from 'react';
import Block from './block';
import NextContainer from '../container/NextContainer';
import PrevContainer from '../container/PrevContainer';

function Header(props) {
    return (
         <div className="header-container">
             <div className="header-title">
                 <PrevContainer />
                 <span className="month-year">{props.month} {props.year}</span>
                 <NextContainer />
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