import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Navigation from "./components/Navigation";
import {initializeApp} from "./store/game/game-actions";
import {useGame} from "./store/game/game-selectors";
import Splash from "./components/Splash";

import GlobalStyle from "./components/styles/global"

function App() {
	const dispatch = useDispatch();
	const {isInitialized} = useGame();

	useEffect(() => {
		dispatch(initializeApp());
		// eslint-disable-next-line
	}, []);

	return (
		<AlertProvider template={AlertTemplate} position="bottom center" timeout={5000}>
			<GlobalStyle/>
			{isInitialized ? <Navigation/> : <Splash/>}
		</AlertProvider>
	);
}

export default App;
