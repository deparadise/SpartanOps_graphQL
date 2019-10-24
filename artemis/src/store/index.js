// STARTING STORE INDEX
import { createStore, compose, applyMiddleware } from 'redux';

// COMBINED REDUCER INDEX >>
import combinedReducers from '../reducers';
// COMPOSED STATE MODEL TREE >>
import initialState from './initial-state';

// START TERTIARY MIDDLE WARE & ENHANCERS >>
const middleware = [];
const enhancer = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log('>> STORE WILL USE:', {
	combined_reducers: combinedReducers,
	initial_state_tree: initialState
});

export default createStore(
	combinedReducers,
	initialState,
	composeEnhancers(applyMiddleware(...middleware), ...enhancer)
);
