import { GET_HOTELS, SET_HOTELS, SET_ERROR, SET_LOADING } from "../constants";

export const getHotels = (payload = undefined) => {
	return {
		type: GET_HOTELS,
		payload
	}
}
export const setHotels = (payload = undefined) => {
	return {
		type: SET_HOTELS,
		payload
	}
}
export const setLoading = (payload = undefined) => {
	return {
	type: SET_LOADING,
	payload
}}
export const setError = (payload = undefined) => {
	return {
	type: SET_ERROR,
	payload
}}