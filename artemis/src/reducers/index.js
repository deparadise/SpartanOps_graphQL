// STARTING COMBINED REDUCER COLLECTION
import { combineReducers } from 'redux';

// IMPORT SUB-REDUCERS >>
import consoleState from './console-reducer';
// >> ADD REDUCERS HERE <<<

console.log('>> REDUCER INDEX WILL COMBINE:', {
	console_state: consoleState
});

export default combineReducers({
	consoleState
});
