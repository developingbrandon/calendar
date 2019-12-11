import React from 'react';

function Month(props) {

    console.log(props.week.length);
       return (
           <div className="calendar">
               {props.week}
           </div>
       );
}


export default Month;