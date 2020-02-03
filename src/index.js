import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './container/AppContainer';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';

const date = moment();
const today = date.format('YYYY-M-D');
const month = date.format('M');
const monthLong = date.format('MMMM');
const year = date.format('YYYY');
const daysInMonth = date.daysInMonth();

const initialState = {
    date,
    today,
    month,
    monthLong,
    year,
    daysInMonth
};


const store = createStore(rootReducer, initialState);

console.log(store.getState());

ReactDOM.render(<Provider store={store}><AppContainer/></Provider>, document.getElementById('root'));


