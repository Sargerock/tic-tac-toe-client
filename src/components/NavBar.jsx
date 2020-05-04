import React from 'react';

import {LinkNavBar, NavBarWrapper} from "./styles";

const NavBar = () => {
	return (
		<NavBarWrapper>
			<LinkNavBar exact to="/">Game</LinkNavBar>
			<LinkNavBar to="/history">History</LinkNavBar>
		</NavBarWrapper>
	);
};

export default NavBar;
