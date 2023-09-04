import {ForkEffect, call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_POPULAR_MOVIES, setPopularMovieListAction} from '../actions/movieActions';
import {getPopularMovies} from '../../services/movieServices';

export function* fetchPopularMoviesSaga(): Generator<void> | void {
    const response = yield call(getPopularMovies);
    yield put(setPopularMovieListAction(response.results));
}

export function* watchMovieSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_POPULAR_MOVIES, fetchPopularMoviesSaga);
}
