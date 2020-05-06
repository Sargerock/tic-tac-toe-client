import React from 'react';
import moment from "moment";

import Field from "./Field";

import {FlexWrapper, WrapperGamesListItem} from "./styles";
import Step from "./Step";
import {getMessage} from "../utils";

const GamesListItem = ({id, field, createdAt, history, player, winner}) => {
	return (
		<WrapperGamesListItem>
			<Field field={field} disabled/>
			<FlexWrapper padding="5px 10px" flexDirection="column">
				<h3>{getMessage(player, winner)}</h3>
				<div>{moment(createdAt).format("MMMM D. LT")}</div>
				{history.map((stepId, index) => <Step key={stepId} id={stepId} index={index + 1} gameId={id}/>)}
			</FlexWrapper>
		</WrapperGamesListItem>
	);
};

export default GamesListItem;
