import { createStore, compose, applyMiddleware } from 'redux';

import combinedReducers from '../reducers';
import initialState from './initial-state';

const middleware = [];
const enhancer = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	combinedReducers,
	initialState,
	composeEnhancers(applyMiddleware(...middleware), ...enhancer)
);
