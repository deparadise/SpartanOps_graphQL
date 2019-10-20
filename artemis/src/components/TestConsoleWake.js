import React, { Component } from 'react';
// TODO: css TBD

class TestConsoleWake extends Component {
	handleChange = (event) => {
		const value = event.target.value;
		console.log('>> WAKE CLIKED! :', value);
	};

	render() {
		return <button onClick={this.handleChange}>Wake</button>;
	}
}

export default TestConsoleWake;
