import {createRequestAction} from "../../utils";

export const FETCH_GAMES = "history/FETCH_GAMES";
export const fetchGames = (offset, limit) =>
	createRequestAction(FETCH_GAMES, "get", `/game?offset=${offset}&limit=${limit}`);


export const SET_STEP = "history/SET_STEP";
export const setStep = (gameId, step) => ({type: SET_STEP, payload: {gameId, step}});

export const FETCH_STEP = "history/FETCH_STEP";
export const fetchStep = (id) =>
	createRequestAction(FETCH_STEP, "get", `/game/step/${id}`, {}, {asPromise: true});

export const SAVE_TO_HISTORY = "history/SAVE_TO_HISTORY";
export const saveToHistory = (game) => ({type: SAVE_TO_HISTORY, payload: {game}});