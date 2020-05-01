import {success} from "redux-saga-requests";

import {FETCH_GAMES} from "./history-actions";

const initialState = {
	games: [],
	offset: 0,
	limit: 5,
	hasMore: true,
	steps: {
		byId: {}
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
		default:
			return state;
	}
}