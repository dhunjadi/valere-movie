import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getMovieById} from '../services/movieServices';
import {Movie} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {addToFavoritesAction, removeFromFavoritesAction} from '../store/actions/movieActions';
import Button from '../components/Button';

const MovieDetailsPage = () => {
    const {favoritedMovies} = useSelector((state: StoreState) => state.movieReducer);
    const {id} = useParams();
    const [movie, setMovie] = useState<Movie>();
    const isFavorited = favoritedMovies.some((favMovie) => favMovie.id === movie?.id);
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieById(id!).then((res) => setMovie(res));
    }, [id]);

    const handleAddRemoveFromFavorites = () => {
        movie && isFavorited ? dispatch(removeFromFavoritesAction(movie.id)) : dispatch(addToFavoritesAction(movie!));
    };

    return (
        <div className="p-movieDetails">
            <div className="p-movieDetails__movieInfo_poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="movie poster" />
            </div>
            <div className="p-movieDetails__movieInfo">
                <div className="p-movieDetails__movieInfo_title">
                    <h1>{movie?.title}</h1>
                </div>
                <div className="p-movieDetails__movieInfo_title">
                    <span>Rating: </span> {movie?.vote_average.toFixed(1)}
                </div>
                <div className="p-movieDetails__movieInfo_overview">
                    <span>Overview:</span> <p>{movie?.overview}</p>
                </div>

                <Button onClick={handleAddRemoveFromFavorites}>{isFavorited ? 'Remove from favorites' : 'Add to favorites'}</Button>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
