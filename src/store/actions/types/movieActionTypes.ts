import {Movie} from '../../../types';
import {FETCH_POPULAR_MOVIES, SET_POPULAR_MOVIES_LIST} from '../movieActions';

export type FetchPopularMoviesAction = {
    type: typeof FETCH_POPULAR_MOVIES;
};

export type SetPopularMovieListAction = {
    type: typeof SET_POPULAR_MOVIES_LIST;
    movies: Movie[];
};

export type MovieAction = FetchPopularMoviesAction | SetPopularMovieListAction;
