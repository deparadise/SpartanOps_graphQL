import { WAKE_CONSOLE } from '../actions/constants';
import { defaultForConsole } from '../store/initial-state';

export default function(state = defaultForConsole(), action) {
	let { type, value } = action;

	if (type === WAKE_CONSOLE) {
		return { ...state, wake: value };
	}

	return state;
}
