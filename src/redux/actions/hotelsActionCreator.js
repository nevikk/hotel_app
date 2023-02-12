import {
	GET_HOTELS,
	SET_HOTELS,
	SET_ERROR,
	SET_LOADING,
	ADD_FAVORITE,
	SET_FILTER,
	REMOVE_FROM_FAVORITE,
} from '../constants';

export const getHotels = (payload = undefined) => {
	return {
		type: GET_HOTELS,
		payload,
	};
};
export const setHotels = (payload = undefined) => {
	return {
		type: SET_HOTELS,
		payload,
	};
};
export const setLoading = (payload = undefined) => {
	return {
		type: SET_LOADING,
		payload,
	};
};
export const setError = (payload = undefined) => {
	return {
		type: SET_ERROR,
		payload,
	};
};
export const setFilter = (payload = undefined) => {
	return {
		type: SET_FILTER,
		payload,
	};
};

export const addFavorite = (payload = undefined) => {
	return {
		type: ADD_FAVORITE,
		payload,
	};
};

export const removeFromFavorite = (payload = undefined) => {
	return {
		type: REMOVE_FROM_FAVORITE,
		payload,
	};
};
