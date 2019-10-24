// START SAMPLE SUB REDUCER
// THIS CREATES AND CONTROLS A SUB NODE ON THE STATE TREE

// IMPORT CONSTANTS AND STATE
import { WAKE_CONSOLE } from '../actions/constants';
import { defaultForConsole } from '../store/initial-state';

export default function(state = defaultForConsole(), action) {
	let { type, value } = action;

	if (type === WAKE_CONSOLE) {
		return { ...state, wake: value };
	}

	// RETURN DEFAULT STATE IF TYPE IS NOT FOUND
	return state;
}
