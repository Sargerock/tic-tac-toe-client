import React from 'react';
import PropTypes from "prop-types"
import {useHistory} from "../store/history/history-selector";
import {useDispatch} from "react-redux";

import {fetchStep, setStep} from "../store/history/history-actions";

import {StepWrapper} from "./styles";

const Step = ({id, gameId, index}) => {
	const dispatch = useDispatch();
	const {steps} = useHistory();

	const onClickHandler = async () => {
		if (steps.allIds.includes(id)) {
			dispatch(setStep(gameId, steps.byId[id]));
		} else {
			try {
				const action = await dispatch(fetchStep(id));
				dispatch(setStep(gameId, action.payload.data));
			} catch (e) {
				alert.show(e.payload.response.data.message, {type: "error"})
			}
		}
	}
	return (
		<StepWrapper onClick={onClickHandler}>
			Step {index}
		</StepWrapper>
	);
};

Step.propTypes = {
	id: PropTypes.string.isRequired,
	gameId: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired
};


export default Step;
