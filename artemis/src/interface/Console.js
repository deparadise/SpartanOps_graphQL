import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleConsoleWake } from '../actions/console-actions';
import TestConsoleWake from '../components/TestConsoleWake';

const selectedStateForDefault = (state) => {
	let {
		consoleState: { wake }
	} = state;
	return {
		wake
	};
};
const selectedDispatchForDefault = (dispatch) => {
	return bindActionCreators(
		{
			toggleConsoleWake
		},
		dispatch
	);
};

export default connect(
	selectedStateForDefault,
	selectedDispatchForDefault
)(TestConsoleWake);
