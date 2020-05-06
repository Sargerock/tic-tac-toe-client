import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import GamePage from "../pages/GamePage";
import HistoryPage from "../pages/HistoryPage";

const Navigation = () => {
	return (
		<Router>
			<Switch>
				<Route path="/history" component={HistoryPage}/>
				<Route path="/" component={GamePage}/>
			</Switch>
		</Router>
	);
};

export default Navigation;
