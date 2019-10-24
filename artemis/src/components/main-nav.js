import React from 'react';
import { Link } from '@reach/router';

function MainNav() {
	return (
		<nav>
			<Link to="/">Artemis</Link>
			<Link to="personnel">Personnel</Link>
			<Link to="inventory">Inventory</Link>
			<Link to="engagement">Engagements</Link>
			<Link to="battle-log">Battle Log</Link>
		</nav>
	);
}

export default MainNav;
