import React from 'react';
import {useDispatch} from "react-redux";

import {useGame} from "../store/game/game-selectors";
import Field from "../components/Field";
import {startGame} from "../store/game/game-actions";

import {Button, MainWrapper, StyledBlock} from "../components/styles";

const GamePage = () => {
	const dispatch = useDispatch();
	const {field, message, isGameOver, gameId} = useGame();

	return (
		<MainWrapper>
			<StyledBlock height="60px">
				<h2>{message}</h2>
			</StyledBlock>
			<Field field={field}/>
			<StyledBlock height="100px">
				{(!gameId || isGameOver) && <Button onClick={() => dispatch(startGame())}>New game</Button>}
			</StyledBlock>
		</MainWrapper>
	);
};

export default GamePage;
