import { SET_SORT } from "../constants";

export const setSort = (payload = undefined) => {
	return {
		type: SET_SORT,
		payload,
	};
};