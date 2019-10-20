import React from 'react';
import { Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';

import Artemis from './view/console';
import Engagements from './view/engagements';
import Personnel from './view/personnel';
import Inventory from './view/inventory';
import BattleLog from './view/battle-log';

import MainNav from './components/main-nav';

function App() {
	return (
		<div className="App">
			<header>
				<Router>
					<Artemis path="/" />
					<Engagements path="/engagement" />
					<Personnel path="/personnel" />
					<Inventory path="/inventory" />
					<BattleLog path="/battle-log" />
				</Router>
				<MainNav />
			</header>
			<main className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</main>
		</div>
	);
}

export default App;
