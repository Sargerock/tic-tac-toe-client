import React from 'react';
import moment from "moment";

import Field from "./Field";

import {FlexWrapper, WrapperGamesListItem} from "./styles";
import Step from "./Step";

const GamesListItem = ({id, field, createdAt, history}) => {
	return (
		<WrapperGamesListItem>
			<Field field={field} disabled/>
			<FlexWrapper>
				<div>{moment(createdAt).format("MMMM D. LT")}</div>
				{history.map((stepId, index) => <Step key={stepId} id={stepId} index={index + 1} gameId={id} />)}
			</FlexWrapper>
		</WrapperGamesListItem>
	);
};

export default GamesListItem;
