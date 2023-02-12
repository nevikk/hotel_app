import { SET_SORT } from './../constants';
const defaultState = {
	params: [
		{ id: 'stars', name: 'Рейтинг' },
		{ id: 'priceAvg', name: 'Цена' },
	],
	activeParam: 'stars',
	// Тип сортировки false -> по убыванию, true -> по возрастанию
	ascType: true,
};

export const sortReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_SORT:
			return { ...state, ...action.payload};
		default:
			return state;
	}
};
