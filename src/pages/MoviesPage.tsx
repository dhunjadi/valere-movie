import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPopularMoviesAction} from '../store/actions/movieActions';
import {StoreState} from '../store/reducers/rootReducer';
import {useNavigate} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const MoviesPage = () => {
    const {movieList} = useSelector((state: StoreState) => state.movieReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPopularMoviesAction());
    }, [dispatch]);

    return (
        <div className="p-movies">
            <section>
                <h2>Popular</h2>

                <ImageList
                    sx={{
                        gridAutoFlow: 'column',
                        gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr)) !important',
                        gridAutoColumns: 'minmax(160px, 1fr)',
                    }}
                >
                    {movieList.map((movie) => (
                        <div className="movie-img" onClick={() => navigate(`${movie.id}`)}>
                            <ImageListItem>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            </ImageListItem>
                        </div>
                    ))}
                </ImageList>
            </section>
        </div>
    );
};

export default MoviesPage;
