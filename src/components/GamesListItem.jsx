import React from 'react';
import moment from "moment";

import Field from "./Field";

import {WrapperGamesListItem} from "./styles";

const GamesListItem = ({field, createdAt}) => {
	return (
		<WrapperGamesListItem>
			<Field field={field} disabled/>
			<p>{moment(createdAt).format("MMMM D. LT")}</p>
		</WrapperGamesListItem>
	);
};

export default GamesListItem;
