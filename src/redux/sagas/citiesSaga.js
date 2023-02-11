import { takeEvery, fork, put, call } from '@redux-saga/core/effects';
import { setCities } from '../actions/citiesActionCreator';
import { setError, setLoading } from '../actions/hotelsActionCreator';
import { fetchCities } from '../asyncAction/cities';
import { GET_CITIES } from '../constants';

export function* handleGetCities() {
	try {
		yield put(setLoading(true));
		const citiesArray = yield call(fetchCities);
		const newCities = {};
		yield citiesArray.map(city => {
			const { name } = city;
			const ruName = name.find(nameArray => {
				if (nameArray.RU) {
					return true;
				}
				return false;
			});
			const enName = name.find(nameArray => {
				if (nameArray.EN) {
					return true;
				}
				return false;
			});
			if (ruName && enName) {
				if (ruName['RU'][0].name && enName['EN'][0].name) {
					newCities[ruName['RU'][0].name] = enName['EN'][0].name;
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
