import { SET_HOTELS, SET_ERROR, SET_LOADING, ADD_FAVORITE } from "../constants";
import { SET_FILTER, REMOVE_FROM_FAVORITE } from './../constants';

const defaultState = {
	hotels: [],
	isLoading: false,
	error: '',
	locationRu: 'Москва',
	filter: {
		location: 'Moscow',
		// Форматируем текущую дату в строку вида 'год-месяц-день'
		checkIn: new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('.').reverse().join('-'),
		checkOut: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('.').reverse().join('-')
	},
	day: 1,
	images: ['../img/carousel/item-1.jpg', '../img/carousel/item-2.jpg', '../img/carousel/item-3.jpg', '../img/carousel/item-1.jpg', '../img/carousel/item-2.jpg', '../img/carousel/item-3.jpg'],
	favorites: [],
}

export const hotelsReducer = (state = defaultState, action) => {
	switch(action.type) {
		case SET_LOADING:
			return {...state, isLoading: action.payload};
		case SET_HOTELS:
			return {...state, hotels: action.payload};
		case SET_ERROR:
			return {...state, error: action.payload};
		case SET_FILTER:
			const {filter, day, locationRu} = action.payload;
			return {...state, filter, day, locationRu};
		case ADD_FAVORITE:
			// В массиве избранного добавляем отелю свойства количества дней и день заезда, для правильного отображения списка избранного
			return {...state, favorites: [...state.favorites, {...action.payload, day: state.day, checkIn: state.filter.checkIn}]}
		case REMOVE_FROM_FAVORITE:
			return {...state, favorites: state.favorites.filter(hotel => {
				return hotel.hotelId !== action.payload;
			})}
		default:
			return state
	}
}



