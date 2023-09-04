import {ForkEffect, call, put, takeLatest} from 'redux-saga/effects';
import {
    FETCH_MOVIE_LISTS,
    setActionMovieListAction,
    setDocumentaryMovieListAction,
    setIsLoadingAction,
    setPopularMovieListAction,
} from '../actions/movieActions';
import {getActionMovies, getDocumentaryMovies, getPopularMovies} from '../../services/movieServices';

export function* fetchMovieListsSaga(): Generator<void> | void {
    yield put(setIsLoadingAction(true));

    const responsePopular = yield call(getPopularMovies);
    const responseAction = yield call(getActionMovies);
    const responseDocumentary = yield call(getDocumentaryMovies);

    yield put(setPopularMovieListAction(responsePopular.results));
    yield put(setActionMovieListAction(responseAction.results));
    yield put(setDocumentaryMovieListAction(responseDocumentary.results));

    yield put(setIsLoadingAction(false));
}

export function* watchMovieSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_MOVIE_LISTS, fetchMovieListsSaga);
}
