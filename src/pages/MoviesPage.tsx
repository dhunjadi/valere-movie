import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieListsAction} from '../store/actions/movieActions';
import {StoreState} from '../store/reducers/rootReducer';
import MovieListSection from '../components/MovieListSection';

const MoviesPage = () => {
    const {popularMovieList, actionMovieList, documentaryMovieList} = useSelector((state: StoreState) => state.movieReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieListsAction());
    }, [dispatch]);

    return (
        <div className="p-movies">
            <MovieListSection sectionTitle="Popular" movies={popularMovieList} />
            <MovieListSection sectionTitle="Action" movies={actionMovieList} />
            <MovieListSection sectionTitle="Documentary" movies={documentaryMovieList} />
        </div>
    );
};

export default MoviesPage;
