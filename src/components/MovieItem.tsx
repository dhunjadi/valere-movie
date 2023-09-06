import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {Movie} from '../types';
import {useNavigate} from 'react-router-dom';
import Button from './Button';
import {addToFavoritesAction, removeFromFavoritesAction} from '../store/actions/movieActions';

type MovieItemProps = {
    movie: Movie;
};

const MovieItem = ({movie}: MovieItemProps) => {
    const {favoritedMovies} = useSelector((state: StoreState) => state.movieReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isFavorited = favoritedMovies.some((favMovie) => favMovie.id === movie.id);

    return (
        <div className="c-movieItem">
            <div className="c-movieItem__img">
                <img
                    onClick={() => navigate(`${movie.id}`)}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>

            <Button
                onClick={() => {
                    isFavorited ? dispatch(removeFromFavoritesAction(movie.id)) : dispatch(addToFavoritesAction(movie));
                }}
            >
                {isFavorited ? 'Remove from favorites' : 'Add to favorites'}
            </Button>
        </div>
    );
};

export default MovieItem;
