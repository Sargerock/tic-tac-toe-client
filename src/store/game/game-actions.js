import {createRequestAction} from "../../utils";

export const MAKE_MOVE = "game/MAKE_MOVE";
export const makeMove = (player, position) => (dispatch, getState) => {
	const { gameId } = getState().game;
	dispatch(createRequestAction(MAKE_MOVE, "post", "/game/move", {gameId, player, position}))
}

export const START_GAME = "game/START_GAME";
export const startGame = () =>
	createRequestAction(START_GAME, "get", "/game/new-game");