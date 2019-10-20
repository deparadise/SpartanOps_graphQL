import { createStore } from "redux";

// import reducers from '../reducers'; // TODO: reducers TBD
import initialState from "./initial-state";

export default createStore(
	() => {}, // TODO: combineReducers imp TBD
	initialState
);
