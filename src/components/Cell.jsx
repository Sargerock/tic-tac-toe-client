import React from 'react';
import PropTypes from 'prop-types';

import {useGame} from "../store/game/game-selectors";

import {CircleStyled, CrossStyled, ButtonCell} from "./styles"

const Cell = ({value, position, disabled, onClickHandler, selected}) => {
	const {isLoading} = useGame();
	return (
		<ButtonCell
			onClick={() => {
				if (onClickHandler) {
					onClickHandler(position);
				}
			}}
			disabled={disabled || isLoading}
			selected={selected}
		>
			{value && (value === "X" ? <CrossStyled/> : <CircleStyled/>)}
		</ButtonCell>
	);
};

Cell.propTypes = {
	value: PropTypes.oneOf(["X", "O", ""]),
	position: PropTypes.number.isRequired,
	onClickHandler: PropTypes.func,
	disabled: PropTypes.bool,
	selected: PropTypes.bool
};

Cell.defaultProps = {
	selected: true,
	disabled: false,
	value: ""
}

export default Cell;
