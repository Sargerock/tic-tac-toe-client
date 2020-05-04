import {createRequestAction, loadGameId} from "../../utils";

export const MAKE_STEP = "game/MAKE_STEP";
export const makeStep = (player, position) => (dispatch, getState) => {
	const {gameId} = getState().game;
	return dispatch(createRequestAction(
		MAKE_STEP,
		"put",
		"/game",
		{gameId, player, position},
		{asPromise: true}
	))
}

export const START_GAME = "game/START_GAME";
export const startGame = () =>
	createRequestAction(START_GAME, "post", "/game", null, {asPromise: true});

export const FETCH_GAME = "game/FETCH_GAME";
export const initializeApp = () => {
	const gameId = loadGameId();
	if (gameId) {
		return createRequestAction(FETCH_GAME, "get", `/game/${gameId}`, null, {asPromise: true});
	} else {
		return startGame();
	}
}