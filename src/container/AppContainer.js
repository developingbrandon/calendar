import { connect } from 'react-redux';
import App from './App';
// import moment from 'moment';

/*const getNow = () => {
    let now = moment();
    return {
        now
    }

} */

const mapStateToProps = state => {
    return {
        now: state.now
    }
}

const Container = connect(
    mapStateToProps
)(App);

export default AppContainer;