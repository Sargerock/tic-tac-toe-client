import React from 'react';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import Cell from "./Cell";
import {useGame} from "../store/game/game-selectors";
import {makeMove} from "../store/game/game-actions";

import {WrapperField} from "./styles"

const Field = ({field, disabled}) => {
	const dispatch = useDispatch();
	const {player, isGameOver} = useGame();

	const onCellClickHandler = (position) => {
		dispatch(makeMove(player, position));
	}
	return (
		<WrapperField>
			{field.map((item, index) => <Cell
				key={index}
				position={index}
				value={item}
				disabled={disabled || isGameOver}
				onClickHandler={onCellClickHandler}
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
