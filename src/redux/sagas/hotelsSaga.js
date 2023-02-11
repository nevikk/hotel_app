import { takeEvery, put, call, select } from '@redux-saga/core/effects';
import { GET_HOTELS } from '../constants';
import { setError, setLoading } from '../actions/hotelsActionCreator';
import { fetchHotels } from '../asyncAction/hotels';

export function* handleGetHotels() {
	try {
		yield put(setLoading(true));
		const filter = yield select((state) => state.hotelsReducer.filter);
		yield call(fetchHotels, filter);
		yield put(setLoading(false));
	} catch {
		yield put(setLoading(false));
		yield put(setError('Не удалось загрузить отели'));
	}
}

export function* handleHotels() {
	yield call(handleGetHotels);
}

export function* watchHotelsSaga() {
	yield takeEvery(GET_HOTELS, handleHotels);
}
