import {success, error} from "redux-saga-requests";

import {FETCH_GAME, MAKE_STEP, START_GAME} from "./game-actions";

const initialState = {
	gameId: "",
	field: [],
	player: "X",
	isGameOver: false,
	message: "",
	isInitialized: false
}

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_GAME:
		case FETCH_GAME:
			return {
				...state,
				message: "",
				isGameOver: false,
				isLoading: true
			}
		case MAKE_STEP:
			return {
				...state,
				isLoading: true
			}
		case success(START_GAME):
			return {
				...state,
				gameId: action.payload.data.id,
				field: action.payload.data.field,
				isLoading: false,
				isInitialized: true
			};
		case success(MAKE_STEP):
			return {
				...state,
				field: action.payload.data.game.field,
				isGameOver: action.payload.data.isGameOver,
				message: action.payload.data.message,
				isLoading: false,
			}
		case success(FETCH_GAME):
			return {
				...state,
				gameId: action.payload.data.game.id,
				field: action.payload.data.game.field,
				isGameOver: action.payload.data.isGameOver,
				message: action.payload.data.message,
				isLoading: false,
				isInitialized: true
			}
		case error(FETCH_GAME):
			return {
				...state,
				isInitialized: true,
				isLoading: false,
				isGameOver: true
			}
		default:
			return state;
	}
}
