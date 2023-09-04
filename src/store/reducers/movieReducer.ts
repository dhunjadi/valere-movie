import {Movie} from '../../types';
import {SET_POPULAR_MOVIES_LIST} from '../actions/movieActions';
import {MovieAction} from '../actions/types/movieActionTypes';

export interface MovieReducerState {
    movieList: Movie[];
}

const initialState: MovieReducerState = {
    movieList: [],
};

export const movieReducer = (state: MovieReducerState = initialState, action: MovieAction) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES_LIST:
            return {
                ...state,
                movieList: action.movies,
            };
        default:
            return state;
    }
};
