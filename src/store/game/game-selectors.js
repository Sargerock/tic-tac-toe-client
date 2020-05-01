import {useSelector} from "react-redux";

export const useGame = () => {
	return useSelector(state => state.game);
}