import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import App from './App';

import './index.css';

ReactDOM.render(
	// Provider side loads the store to all child components
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
