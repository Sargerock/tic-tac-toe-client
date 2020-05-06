import React from 'react';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import Cell from "./Cell";
import {useGame} from "../store/game/game-selectors";
import {makeStep} from "../store/game/game-actions";
import {saveToHistory} from "../store/history/history-actions";

import {WrapperField} from "./styles"

const Field = ({field, disabled}) => {
	const dispatch = useDispatch();
	const {player, isGameOver} = useGame();

	const onCellClickHandler = async (position) => {
		const action = await dispatch(makeStep(player, position));
		if (action.payload.data.isGameOver) {
			dispatch(saveToHistory(action.payload.data.game));
		}
	}

	return (
		<WrapperField>
			{field.map((item, index) => <Cell
				key={index}
				position={index}
				value={item}
				disabled={disabled || isGameOver}
				onClickHandler={!item ? onCellClickHandler : undefined}
			/>)}
		</WrapperField>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	disabled: PropTypes.bool
}
Field.defaultProps = {
	disabled: false
}

export default Field;
