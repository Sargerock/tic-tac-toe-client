import React from 'react';
import {useDispatch} from "react-redux";

import Cell from "./Cell";
import {setPlayer} from "../store/game/game-actions";
import {useGame} from "../store/game/game-selectors";

import {FlexWrapper, Separator} from "./styles";

const FigureSelection = () => {
	const dispatch = useDispatch();
	const {player} = useGame();
	return (
		<>
			<h3>Your figure</h3>
			<FlexWrapper justifyContent="space-around" alignItems="center">
				<Cell onClickHandler={() => {
					dispatch(setPlayer("X"))
				}}
					  position={0}
					  value="X"
					  selected={player === "X"}
				/>
				<Separator margin="0px 20px">or</Separator>
				<Cell onClickHandler={() => {
					dispatch(setPlayer("O"))
				}}
					  position={0}
					  value="O"
					  selected={player === "O"}
				/>
			</FlexWrapper>
		</>
	);
};

export default FigureSelection;
