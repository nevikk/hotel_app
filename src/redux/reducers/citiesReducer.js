import { SET_CITIES } from "../constants";

const defaultState = {
	cities: {
		'Москва': 'Moscow',
	},
}

export const citiesReducer = (state = defaultState, action) => {
	switch(action.type) {
		case SET_CITIES:
			return {...state, cities: {...action.payload}};
		default:
			return state
	}
}

