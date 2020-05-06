import {success, error} from "redux-saga-requests";

import {FETCH_GAME, MAKE_STEP, SET_INITIALIZED, SET_PLAYER, START_GAME} from "./game-actions";
import {getMessage} from "../../utils";

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
		case SET_PLAYER:
			return {
				...state,
				player: action.payload.player
			}
		case SET_INITIALIZED:
			return {
				...state,
				isInitialized: true,
				isGameOver: true
			}
		case success(START_GAME):
			return {
				...state,
				gameId: action.payload.data.id,
				field: action.payload.data.field,
				isLoading: false,
				isInitialized: true
			};
		case success(MAKE_STEP): {
			const {field, player, winner} = action.payload.data.game;
			const message = action.payload.data.isGameOver ? getMessage(player, winner) : "";
			return {
				...state,
				field,
				isGameOver: action.payload.data.isGameOver,
				message,
				isLoading: false,
			}
		}
		case success(FETCH_GAME): {
			const {field, player, winner} = action.payload.data.game;
			const message = action.payload.data.isGameOver ? getMessage(player, winner) : "";
			return {
				...state,
				gameId: action.payload.data.game.id,
				field,
				isGameOver: action.payload.data.isGameOver,
				message,
				isLoading: false,
				isInitialized: true,
				player
			}
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
