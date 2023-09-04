import {Movie} from '../../types';
import {FetchPopularMoviesAction, SetPopularMovieListAction} from './types/movieActionTypes';

export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';
export const SET_POPULAR_MOVIES_LIST = 'SET_POPULAR_MOVIES_LIST';

export const fetchPopularMoviesAction = (): FetchPopularMoviesAction => ({
    type: FETCH_POPULAR_MOVIES,
});

export const setPopularMovieListAction = (movies: Movie[]): SetPopularMovieListAction => ({
    type: SET_POPULAR_MOVIES_LIST,
    movies,
});
