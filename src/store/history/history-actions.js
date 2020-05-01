import {createRequestAction} from "../../utils";

export const FETCH_GAMES = "history/FETCH_GAMES";
export const fetchGames = () => (dispatch, getState) => {
	const {offset, limit} = getState().history
	dispatch(createRequestAction(FETCH_GAMES, "get", `/game?offset=${offset}&limit=${limit}`));
}