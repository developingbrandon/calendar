import { connect } from 'react-redux';
import { decrementMonth } from '../actions';
import Previous from '../components/previous';

const mapDispatchToProps = dispatch => {
    return {
        handlePrevious: () => dispatch(decrementMonth())
    }
}

const PrevContainer = connect(
    null,
    mapDispatchToProps
)(Previous);

export default PrevContainer;