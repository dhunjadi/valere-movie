import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {watchMovieSaga} from './sagas/movieSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchMovieSaga);
