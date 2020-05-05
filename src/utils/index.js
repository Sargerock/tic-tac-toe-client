export const createRequestAction = (type, method, url, data, meta) => ({
	type,
	payload: {
		request: {
			url,
			method,
			data
		}
	},
	meta
});

const GAME_ID = "GAME_ID";
export const saveGameId = id => {
	localStorage.setItem(GAME_ID, id);
}

export const loadGameId = () => localStorage.getItem(GAME_ID);

export const getMessage = (player, winner) => {
	if (!winner) {
		return "Draw."
	} else {
		return player === winner ? "Player wins the game!" : "Bot wins the game!";
	}
}
