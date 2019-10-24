import React from 'react';

function Header(props) {
    return (
        <div className="">
            <div className="month">
                {props.month}
                {props.year}
            </div>
        </div>
    )
}

export default Header;