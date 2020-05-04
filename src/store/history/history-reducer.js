import {success} from "redux-saga-requests";

import {FETCH_GAMES, FETCH_STEP, SAVE_TO_HISTORY, SET_STEP} from "./history-actions";

const initialState = {
	games: [],
	offset: 0,
	limit: 5,
	hasMore: true,
	steps: {
		byId: null,
		allIds: []
	}
}

export const historyReducer = (state = initialState, action) => {
	switch (action.type) {
		case success(FETCH_GAMES):
			const offset = state.offset + action.payload.data.games.length;
			return {
				...state,
				games: [...state.games, ...action.payload.data.games],
				offset,
				hasMore: offset < action.payload.data.totalCount
			}
		case SET_STEP:
			return {
				...state,
				games: state.games.map(game => {
					if (game._id === action.payload.gameId) {
						return {...game, field: action.payload.step.field}
					} else {
						return game;
					}
				})
			}
		case success(FETCH_STEP):
			return {
				...state,
				steps: {
					...state.steps,
					allIds: [...state.steps.allIds, action.payload.data._id],
					byId: {
						...state.steps.byId,
						[action.payload.data._id]: action.payload.data
					}
				}
			}
		case SAVE_TO_HISTORY:
			return {
				...state,
				games: [action.payload.game, ...state.games],
				offset: state.offset + 1
			}
		default:
			return state;
	}
}