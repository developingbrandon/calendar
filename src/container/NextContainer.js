import { connect } from 'react-redux';
import { incrementMonth } from '../actions';
import Next from '../components/next';

const mapDispatchToProps = dispatch => {
    return {
        handleNext: dispatch(incrementMonth)
    }
}

const NextContainer = connect(
    mapDispatchToProps
)(Next);

export default NextContainer;