// START CONSOLE ACTIONS INDEX SAMPLE

import { WAKE_CONSOLE } from './constants';

export const toggleConsoleWake = (wake) => {
	let value = !wake;
	console.log('>> ACTION WILL SET wake to:', value);
	return {
		type: WAKE_CONSOLE,
		value
	};
};
