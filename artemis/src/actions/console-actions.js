import { WAKE_CONSOLE } from './constants';

export const toggleConsoleWake = (wake) => {
	let value = !wake;
	return {
		type: WAKE_CONSOLE,
		value
	};
};
