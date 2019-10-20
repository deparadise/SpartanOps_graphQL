// import uniqueId from 'lodash/uniqueId';

// >>> Temp initilal model payloads go here <<<

// ARTEMIS STATE MODEL
export default {
	console: {
		onBoardStatus: {},
		preferences: {}
	},
	engagementIndex: {},
	battleLogIndex: {},
	personnelIndex: {},
	inventoryIndex: {},
	models: {
		fleet: [],
		personnel: [],
		inventory: {
			transport: [],
			airSupport: [],
			groundSupport: [],
			armament: {},
			supplies: {}
		}
	}
};
