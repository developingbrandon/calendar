import { incrementMonth, decrementMonth } from './actions';
import moment from 'moment';

const initialState = {
    now: moment()
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MONTH_INCREMENT:
            let nextMonth = state.now.add(1, 'M');
            return Object.assign({}, state, {
                now: nextMonth
            });
        case CHANGE_MONTH_DECREMENT:
            let prevMonth = state.now.subtract(1, 'M');
            return Object.assign({}, state, {
                now: prevMonth
            });
        default:
            return state;
    }
}