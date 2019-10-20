import { createStore } from "redux";

// import reducers from '../reducers'; // TBD
import initialState from "./initial-state";

export default createStore(
	{}, // combineReducers imp TBD
	initialState
);
