import {Movie} from '../../types';
import {SET_ACTION_MOVIE_LIST, SET_DOCUMENTARY_MOVIE_LIST, SET_IS_LOADING, SET_POPULAR_MOVIES_LIST} from '../actions/movieActions';
import {MovieAction} from '../actions/types/movieActionTypes';

export interface MovieReducerState {
    isLoading: boolean;
    popularMovieList: Movie[];
    actionMovieList: Movie[];
    documentaryMovieList: Movie[];
}

const initialState: MovieReducerState = {
    isLoading: false,
    popularMovieList: [],
    actionMovieList: [],
    documentaryMovieList: [],
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
        default:
            return state;
    }
};
