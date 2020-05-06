import {createRequestAction} from "../../utils";

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
export const startGame = () => (dispatch, getState) => {
	const {player} = getState().game
	return dispatch(createRequestAction(START_GAME, "post", "/game", {player}, {asPromise: true}));
}

export const FETCH_GAME = "game/FETCH_GAME";
export const fetchGame = gameId =>
	createRequestAction(FETCH_GAME, "get", `/game/${gameId}`, null, {asPromise: true});

export const SET_INITIALIZED = "game/SET_INITIALIZED";
export const setInitialized = () => ({type: SET_INITIALIZED});

export const SET_PLAYER = "game/SET_PLAYER";
export const setPlayer = player => ({type: SET_PLAYER, payload: {player}});
