import { GET_CITIES, SET_CITIES } from "../constants";

export const getCities = (payload = undefined) => {
	return {
		type: GET_CITIES,
		payload,
	};
};
export const setCities = (payload = undefined) => {
	return {
		type: SET_CITIES,
		payload,
	};
};
