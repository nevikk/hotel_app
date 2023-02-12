import { takeEvery, put, call } from '@redux-saga/core/effects';
import { setCities } from '../actions/citiesActionCreator';
import { setError, setLoading } from '../actions/hotelsActionCreator';
import { fetchCities } from '../asyncAction/cities';
import { GET_CITIES } from '../constants';

export function* handleGetCities() {
	try {
		yield put(setLoading(true));
		const citiesArray = yield call(fetchCities);
		const newCities = {};
		// После получения массива городов преобразуем его в объект вида 
		// Ключ => русское название
		// Значение => английское название
		// Для того, чтобы при проверке фильтра брать из инпута значение и по нему проверять, есть ли в объекте городов такой элемент
		// Если да, то город веден верно и он есть в базе
		yield citiesArray.map(city => {
			const { name } = city;
			const ruName = name.find(nameArray => {
				// Ищем поле Ru в объекте города
				if (nameArray.RU) {
					return true;
				}
				return false;
			});
			const enName = name.find(nameArray => {
				// Ишем поле En в объекте города
				if (nameArray.EN) {
					return true;
				}
				return false;
			});
			if (ruName && enName) {
				if (ruName['RU'][0].name && enName['EN'][0].name) {
					// Уберем пробелы и приведем в lowerCase, чтобы было проще сравнивать со значением из инпута фильтра
					newCities[ruName['RU'][0].name.toLowerCase().replaceAll(' ', '')] = enName['EN'][0].name;
				}
			}
		});
		yield put(setCities(newCities));
		yield put(setLoading(false));
	} catch {
		yield put(setLoading(false));
		yield put(setError('Не удалось загрузить отели'));
	}
}

export function* handleCities() {
	yield call(handleGetCities);
}

export function* watchCitySaga() {
	yield takeEvery(GET_CITIES, handleCities);
}
