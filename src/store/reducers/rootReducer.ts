import {combineReducers} from 'redux';
import {MovieReducerState, movieReducer} from './movieReducer';

export interface StoreState {
    movieReducer: MovieReducerState;
}

export const rootReducer = combineReducers({
    movieReducer,
});
