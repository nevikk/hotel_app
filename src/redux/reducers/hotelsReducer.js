import { SET_HOTELS, SET_ERROR, SET_LOADING } from "../constants";

const defaultState = {
	hotels: {
		name: 'Moscow',
	},
	isLoading: false,
	error: '',
	filter: {
		location: 'Moscow',
		// Форматируем текущую дату в строку вида 'год-месяц-день'
		checkIn: String(new Date().getFullYear() + "-" + (new Date().getMonth() + 1 < 10 ? '0'.concat(String(new Date().getMonth() + 1)) : new Date().getMonth() + 1) + "-" + new Date().getDate()),
		checkOut: new Date().getFullYear() + "-" + (new Date().getMonth() + 1 < 10 ? '0'.concat(String(new Date().getMonth() + 1)) : new Date().getMonth() + 1) + "-" + (new Date().getDate() + 1),
	}
}

export const hotelsReducer = (state = defaultState, action) => {
	switch(action.type) {
		case SET_LOADING:
			return {...state, isLoading: action.payload};
		case SET_HOTELS:
			return {...state, hotels: action.payload};
		case SET_ERROR:
			return {...state, error: action.payload};
		default:
			return state
	}
}



