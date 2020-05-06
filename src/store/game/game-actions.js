import {createRequestAction, loadGameId} from "../../utils";

export const MAKE_STEP = "game/MAKE_STEP";
export const makeStep = (gameId, player, position) =>
	createRequestAction(MAKE_STEP, "put", "/game", {gameId, player, position}, {asPromise: true})

export const START_GAME = "game/START_GAME";
export const startGame = (player) =>
	createRequestAction(START_GAME, "post", "/game", {player}, {asPromise: true});

export const initializeApp = () => {
	const gameId = loadGameId();
	if (gameId) {
		return fetchGame(gameId);
	} else {
		return setInitialized();
	}
}

export const FETCH_GAME = "game/FETCH_GAME";
export const fetchGame = gameId =>
	createRequestAction(FETCH_GAME, "get", `/game/${gameId}`, {}, {asPromise: true});

export const SET_INITIALIZED = "game/SET_INITIALIZED";
export const setInitialized = (isInitialized = true) => ({type: SET_INITIALIZED, payload: {isInitialized}});

export const SET_PLAYER = "game/SET_PLAYER";
export const setPlayer = player => ({type: SET_PLAYER, payload: {player}});
