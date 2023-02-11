import { GET_CITIES, SET_CITIES } from "../constants";

const defaultState = {
	cities: {
		'Москва': 'Moscow',
	},
	isLoading: false,
}

export const citiesReducer = (state = defaultState, action) => {
	switch(action.type) {
		case SET_CITIES:
			return {...state, cities: {...action.payload}, isLoading: false, error: false};
		default:
			return state
	}
}

