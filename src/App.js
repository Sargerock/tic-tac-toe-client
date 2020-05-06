import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useDispatch} from "react-redux";

import Navigation from "./components/Navigation";
import {fetchGame, setInitialized} from "./store/game/game-actions";
import {useGame} from "./store/game/game-selectors";
import {loadGameId} from "./utils";
import Splash from "./components/Splash";

import GlobalStyle from "./components/styles/global"

function App() {
	const dispatch = useDispatch();
	const {isInitialized} = useGame();

	useEffect(() => {
		const gameId = loadGameId();
		if (gameId) {
			dispatch(fetchGame(gameId));
		} else {
			dispatch(setInitialized());
		}
	}, [dispatch]);

	if (!isInitialized) {
		return <Splash/>
	} else {
		return (
			<>
				<GlobalStyle/>
				<Router>
					<Navigation/>
				</Router>
			</>
		);
	}
}

export default App;
