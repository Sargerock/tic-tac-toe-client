import React from 'react';
import {useDispatch} from "react-redux";
import {useAlert} from "react-alert";

import {useGame} from "../store/game/game-selectors";
import Field from "../components/Field";
import {startGame} from "../store/game/game-actions";
import NavBar from "../components/NavBar";
import {saveGameId} from "../utils";
import FigureSelection from "../components/FigureSelection";

import {Button, MainWrapper, StyledBlock} from "../components/styles";

const GamePage = () => {
	const dispatch = useDispatch();
	const alert = useAlert();
	const {field, message, isGameOver, isLoading} = useGame();

	return (
		<>
			<NavBar/>
			<MainWrapper>
				<StyledBlock height="210px">
					{isGameOver && <FigureSelection/>}
					<h2>{message}</h2>
				</StyledBlock>
				<Field field={field}/>
				<StyledBlock height="100px">
					{isGameOver && <Button
						onClick={async () => {
							try {
								const action = await dispatch(startGame());
								saveGameId(action.payload.data.id);
							} catch (e) {
								alert.show(e.payload.message, {type: "error"});
							}
						}}
						disabled={isLoading}
					>
						New game
					</Button>}
				</StyledBlock>
			</MainWrapper>
		</>
	);
};

export default GamePage;
