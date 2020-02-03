console.log('reducer fire');

function rootReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_MONTH_INCREMENT':
            let nextMonth = state.date.add(1, 'M');
            let nextDateObj = {
                date: nextMonth,
                month: nextMonth.format('M'),
                monthLong: nextMonth.format('MMMM'),
                year: nextMonth.format('YYYY'),
                daysInMonth: nextMonth.daysInMonth()
            };
            return Object.assign({}, state, nextDateObj);
        case 'CHANGE_MONTH_DECREMENT':
            console.log(`decrement run`);
            let prevMonth = state.date.subtract(1, 'M');
            let prevDateObj = {
                date: prevMonth,
                month: prevMonth.format('M'),
                monthLong: prevMonth.format('MMMM'),
                year: prevMonth.format('YYYY'),
                daysInMonth: prevMonth.daysInMonth()
            };
            return Object.assign({}, state, prevDateObj);
        default:
            console.log(`default run`);
            return state;
    }
}
console.log('rootReducer run');

export default rootReducer;