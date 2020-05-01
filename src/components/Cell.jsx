import React from 'react';
import PropTypes from 'prop-types';

import {useGame} from "../store/game/game-selectors";

import {CircleStyled, CrossStyled, ButtonCell} from "./styles"

const Cell = ({value, position, disabled, onClickHandler}) => {
	const {isLoading} = useGame();
	return (
		<ButtonCell
			onClick={() => {
				onClickHandler(position);
			}}
			disabled={disabled || isLoading || value }
		>
			{value && (value === "X" ? <CrossStyled/> : <CircleStyled/>)}
		</ButtonCell>
	);
};

Cell.propTypes = {
	value: PropTypes.oneOf(["X", "O", ""]),
	position: PropTypes.number.isRequired,
	onClickHandler: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired
};

export default Cell;
