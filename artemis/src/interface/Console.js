//START CONSOLE INTERFACE SAMPLE HIGHER ORDER COMPONENT

// Framework libs >
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions >
import { toggleConsoleWake } from '../actions/console-actions';
// component >
import TestConsoleWake from '../components/TestConsoleWake';

// destructure utils for connect
const selectedStateForDefault = (state) => {
	// Selectively pulls parts of state tree to props
	console.log('>> CONTAINER ASSIGNING STATE:', state);
	let {
		consoleState: { wake }
	} = state;
	return {
		wake
	};
};
const selectedDispatchForDefault = (dispatch) => {
	// Selectively assigns dispatch actions to props
	return bindActionCreators(
		{
			toggleConsoleWake
		},
		dispatch
	);
};

// Finally make the default interface connection
export default connect(
	selectedStateForDefault,
	selectedDispatchForDefault
)(TestConsoleWake);
