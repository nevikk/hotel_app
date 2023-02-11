import { watchCitySaga } from "./citiesSaga";
import { watchHotelsSaga } from "./hotelsSaga";
import { spawn } from '@redux-saga/core/effects';

export default function* rootSaga() {
	yield spawn(watchCitySaga);
	yield spawn(watchHotelsSaga);
}