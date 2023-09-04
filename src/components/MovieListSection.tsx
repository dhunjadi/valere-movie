import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {Movie} from '../types';
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

type MovieListSectionProps = {
    sectionTitle: string;
    movies: Movie[];
};

const MovieListSection = ({sectionTitle, movies}: MovieListSectionProps) => {
    const {isLoading} = useSelector((state: StoreState) => state.movieReducer);
    const navigate = useNavigate();

    return (
        <section>
            <h2>{sectionTitle}</h2>
            {isLoading ? (
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress />
                </Box>
            ) : (
                <ImageList
                    className="p-movies__movieList"
                    sx={{
                        gridAutoFlow: 'column',
                        gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr)) !important',
                        gridAutoColumns: 'minmax(160px, 1fr)',
                    }}
                >
                    {movies.map((movie) => (
                        <div key={movie.id} className="p-movies__movieList_movie" onClick={() => navigate(`${movie.id}`)}>
                            <ImageListItem>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            </ImageListItem>
                        </div>
                    ))}
                </ImageList>
            )}
        </section>
    );
};

export default MovieListSection;
