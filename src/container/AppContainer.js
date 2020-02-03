import { connect } from 'react-redux';
import App from '../components/App';

console.log('App Container fire');

const mapStateToProps = state => {
    console.log(`App mapStateToProps fire`);
    return {
        date: state.date,
        today: state.today,
        month: state.month,
        monthLong: state.monthLong,
        year: state.year,
        daysInMonth: state.daysInMonth
    }
};

const AppContainer = connect(
    mapStateToProps,
    null
)(App);

export default AppContainer;