import React from 'react';
import Square from './square';

function Header(props) {
    return (
        <div className="">
            <div className="month">
                <Square day='Sun'/>
                <Square day='Mon'/>
                <Square day='Tue'/>
                <Square day='Wed'/>
                <Square day='Thu'/>
                <Square day='Fri'/>
                <Square day='Sat'/>
            </div>
        </div>
    )
}

export default Header;