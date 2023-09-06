import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {Movie} from '../types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import MovieItem from './MovieItem';

type MovieListSectionProps = {
    sectionTitle: string;
    movies: Movie[];
};

const MovieListSection = ({sectionTitle, movies}: MovieListSectionProps) => {
    const {isLoading} = useSelector((state: StoreState) => state.movieReducer);

    return (
        <section className="c-movieListSection">
            <h2>{sectionTitle}</h2>
            {isLoading ? (
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress />
                </Box>
            ) : (
                <div className="c-movieListSection__movies">
                    {movies.map((movie) => {
                        return <MovieItem movie={movie} />;
                    })}
                </div>
            )}
        </section>
    );
};

export default MovieListSection;
