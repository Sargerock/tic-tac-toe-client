import {useSelector} from "react-redux";

export const useHistory = () => {
	return useSelector(state => state.history);
}
