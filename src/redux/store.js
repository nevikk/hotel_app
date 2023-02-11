import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { citiesReducer } from './reducers/citiesReducer';
import { hotelsReducer } from './reducers/hotelsReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	citiesReducer,
	hotelsReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
