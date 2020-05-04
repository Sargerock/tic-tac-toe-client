import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAlert} from "react-alert";

import Navigation from "./components/Navigation";
import {initializeApp} from "./store/game/game-actions";
import {useGame} from "./store/game/game-selectors";
import {saveGameId} from "./utils";
import Splash from "./components/Splash";

import GlobalStyle from "./components/styles/global"

function App() {
	const dispatch = useDispatch();
	const {isInitialized} = useGame();
	const alert = useAlert();

	useEffect(() => {
		dispatch(initializeApp())
			.then(action => {
				saveGameId(action.payload.data.id || action.payload.data.game.id);
			})
			.catch((error) => {
				alert.show(error.payload.response.data.message, {type: "error"});
			})
		// eslint-disable-next-line
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
