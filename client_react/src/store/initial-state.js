// import uniqueId from 'lodash/uniqueId';

export const defaultForConsole = () => {
	return {
		wake: false,
		onBoardStatus: {},
		preferences: {}
	};
};

const defaultStateTree = {
	consoleState: defaultForConsole()
	// engagementIndex: {},
	// battleLogIndex: {},
	// personnelIndex: {},
	// inventoryIndex: {},
	// models: {
	// 	fleet: [],
	// 	personnel: [],
	// 	inventory: {
	// 		transport: [],
	// 		airSupport: [],
	// 		groundSupport: [],
	// 		armament: {},
	// 		supplies: {}
	// 	}
	// }
};

export default defaultStateTree;
