console.log('reducer fire');

function rootReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_MONTH_INCREMENT':
            console.log(`increment run`);
            console.log(state);
            let nextMonth = state.date.add(1, 'M');
            let newDateObj = {
                date: nextMonth,
                month: nextMonth.format('M'),
                monthLong: nextMonth.format('MMMM'),
                year: nextMonth.format('YYYY'),
                daysInMonth: nextMonth.daysInMonth()
            };
            console.log('newDateObj is ' + newDateObj.daysInMonth);
            console.log(state);
            return Object.assign({}, state, newDateObj);
        case 'CHANGE_MONTH_DECREMENT':
            console.log(`decrement run`);
            let prevMonth = state.date.subtract(1, 'M');
            return Object.assign({}, state, {
                date: prevMonth
            });
        default:
            console.log(`default run`);
            return state;
    }
}
console.log('rootReducer run');

export default rootReducer;