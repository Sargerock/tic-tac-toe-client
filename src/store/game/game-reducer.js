import {success} from "redux-saga-requests";

import {MAKE_MOVE, START_GAME} from "./game-actions";

const initialState = {
	gameId: "",
	field: [],
	player: "X",
	isGameOver: false,
	message: ""
}

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_GAME:
			return {
				...state,
				message: "",
				isGameOver: false,
				isLoading: true
			}
		case MAKE_MOVE:
			return {
				...state,
				isLoading: true
			}
		case success(START_GAME):
			return {
				...state,
				gameId: action.payload.data.id,
				field: action.payload.data.field,
				isLoading: false
			};
		case success(MAKE_MOVE):
			return {
				...state,
				...action.payload.data,
				isLoading: false
			}
		default:
			return state;
	}
}
