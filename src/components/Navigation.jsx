import React from 'react';
import {Switch, Route} from "react-router-dom";

import GamePage from "../pages/GamePage";
import HistoryPage from "../pages/HistoryPage";

const Navigation = () => {
	return (
		<Switch>
			<Route path="/history" component={HistoryPage}/>
			<Route path="/" component={GamePage}/>
		</Switch>
	);
};

export default Navigation;
