import {success, error} from "redux-saga-requests";

import {FETCH_GAME, MAKE_STEP, SET_INITIALIZED, SET_PLAYER, START_GAME} from "./game-actions";

const initialState = {
	gameId: undefined,
	field: [],
	player: "X",
	isGameOver: true,
	winner: undefined,
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
		case SET_PLAYER:
			return {
				...state,
				player: action.payload.player
			}
		case SET_INITIALIZED:
			return {
				...state,
				isInitialized: true
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
				winner: action.payload.data.game.winner,
				isLoading: false,
			}
		case success(FETCH_GAME):
			return {
				...state,
				gameId: action.payload.data.game.id,
				field: action.payload.data.game.field,
				isGameOver: action.payload.data.isGameOver,
				winner: action.payload.data.game.winner,
				isLoading: false,
				isInitialized: true,
				player: action.payload.data.game.player
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
