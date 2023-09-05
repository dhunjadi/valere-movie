import {Movie} from '../../../types';
import {
    ADD_TO_FAVORITES,
    FETCH_ACTION_MOVIES,
    FETCH_DOCUMENTARY_MOVIES,
    FETCH_MOVIE_LISTS,
    REMOVE_FROM_FAVORITES,
    SET_ACTION_MOVIE_LIST,
    SET_DOCUMENTARY_MOVIE_LIST,
    SET_IS_LOADING,
    SET_POPULAR_MOVIES_LIST,
} from '../movieActions';

export type SetIsLoadingAction = {
    type: typeof SET_IS_LOADING;
    isLoading: boolean;
};

export type FetchMovieListsAction = {
    type: typeof FETCH_MOVIE_LISTS;
};

export type FetchActionMoviesAction = {
    type: typeof FETCH_ACTION_MOVIES;
};

export type FetchDocumentaryMoviesAction = {
    type: typeof FETCH_DOCUMENTARY_MOVIES;
};

export type SetPopularMovieListAction = {
    type: typeof SET_POPULAR_MOVIES_LIST;
    movies: Movie[];
};

export type SetActionMovieListAction = {
    type: typeof SET_ACTION_MOVIE_LIST;
    movies: Movie[];
};

export type SetDocumentaryMovieListAction = {
    type: typeof SET_DOCUMENTARY_MOVIE_LIST;
    movies: Movie[];
};

export type AddToFavoritesAction = {
    type: typeof ADD_TO_FAVORITES;
    id: string;
};

export type RemoveFromFavoritesAction = {
    type: typeof REMOVE_FROM_FAVORITES;
    id: string;
};

export type MovieAction =
    | SetIsLoadingAction
    | FetchMovieListsAction
    | FetchActionMoviesAction
    | FetchDocumentaryMoviesAction
    | SetPopularMovieListAction
    | SetActionMovieListAction
    | SetDocumentaryMovieListAction
    | AddToFavoritesAction
    | RemoveFromFavoritesAction;
