import {Movie} from '../../types';
import {
    AddToFavoritesAction,
    FetchMovieListsAction,
    RemoveFromFavoritesAction,
    SetActionMovieListAction,
    SetDocumentaryMovieListAction,
    SetIsLoadingAction,
    SetPopularMovieListAction,
} from './types/movieActionTypes';

export const SET_IS_LOADING = 'SET_IS_LOADING';
export const FETCH_MOVIE_LISTS = 'FETCH_MOVIE_LISTS';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_DOCUMENTARY_MOVIES = 'FETCH_DOCUMENTARY_MOVIES';
export const SET_POPULAR_MOVIES_LIST = 'SET_POPULAR_MOVIES_LIST';
export const SET_ACTION_MOVIE_LIST = 'SET_ACTION_MOVIE_LIST';
export const SET_DOCUMENTARY_MOVIE_LIST = 'SET_DOCUMENTARY_MOVIE_LIST';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const setIsLoadingAction = (isLoading: boolean): SetIsLoadingAction => ({
    type: SET_IS_LOADING,
    isLoading,
});

export const fetchMovieListsAction = (): FetchMovieListsAction => ({
    type: FETCH_MOVIE_LISTS,
});

export const setPopularMovieListAction = (movies: Movie[]): SetPopularMovieListAction => ({
    type: SET_POPULAR_MOVIES_LIST,
    movies,
});

export const setActionMovieListAction = (movies: Movie[]): SetActionMovieListAction => ({
    type: SET_ACTION_MOVIE_LIST,
    movies,
});

export const setDocumentaryMovieListAction = (movies: Movie[]): SetDocumentaryMovieListAction => ({
    type: SET_DOCUMENTARY_MOVIE_LIST,
    movies,
});

export const addToFavoritesAction = (id: string): AddToFavoritesAction => ({
    type: ADD_TO_FAVORITES,
    id,
});

export const removeFromFavoritesAction = (id: string): RemoveFromFavoritesAction => ({
    type: REMOVE_FROM_FAVORITES,
    id,
});
