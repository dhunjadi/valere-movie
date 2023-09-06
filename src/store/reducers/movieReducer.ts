import {Movie} from '../../types';
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    SET_ACTION_MOVIE_LIST,
    SET_DOCUMENTARY_MOVIE_LIST,
    SET_IS_LOADING,
    SET_POPULAR_MOVIES_LIST,
} from '../actions/movieActions';
import {MovieAction} from '../actions/types/movieActionTypes';

export interface MovieReducerState {
    isLoading: boolean;
    popularMovieList: Movie[];
    actionMovieList: Movie[];
    documentaryMovieList: Movie[];
    favoritedMovies: Movie[];
}

const initialState: MovieReducerState = {
    isLoading: false,
    popularMovieList: [],
    actionMovieList: [],
    documentaryMovieList: [],
    favoritedMovies: [],
};

export const movieReducer = (state: MovieReducerState = initialState, action: MovieAction) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case SET_POPULAR_MOVIES_LIST:
            return {
                ...state,
                popularMovieList: action.movies,
            };
        case SET_ACTION_MOVIE_LIST:
            return {
                ...state,
                actionMovieList: action.movies,
            };
        case SET_DOCUMENTARY_MOVIE_LIST:
            return {
                ...state,
                documentaryMovieList: action.movies,
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritedMovies: [...state.favoritedMovies, action.movie],
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favoritedMovies: [...state.favoritedMovies.filter((movie) => movie.id !== action.id)],
            };
        default:
            return state;
    }
};
