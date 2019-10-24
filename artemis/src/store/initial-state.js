// STARTING INITIAL STATE INDEX
// import uniqueId from 'lodash/uniqueId';

// DECLARE DEFAULT STATE NODES AS EXPORTS >>
export const defaultForConsole = () => {
	return {
		wake: false,
		onBoardStatus: {},
		preferences: {}
	};
};

// COMPOSE DEFAULT STATE TREE FROM DEFAULT EXPORT NODES >>
// NOTE: This will be the shape of the store
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

console.log('>> STATE INDEX COMPOSED INITIAL STATE TREE:', defaultStateTree);
export default defaultStateTree;
