import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {Movie} from '../types';
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {addToFavoritesAction, removeFromFavoritesAction} from '../store/actions/movieActions';

type MovieListSectionProps = {
    sectionTitle: string;
    movies: Movie[];
};

const MovieListSection = ({sectionTitle, movies}: MovieListSectionProps) => {
    const {isLoading, favoritedMovieIds} = useSelector((state: StoreState) => state.movieReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                    {movies.map((movie) => {
                        const isFavorited = favoritedMovieIds.includes(movie.id.toString());
                        return (
                            <React.Fragment key={movie.id}>
                                <div className="p-movies__movieList_movie">
                                    <ImageListItem>
                                        <img
                                            onClick={() => navigate(`${movie.id}`)}
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        />
                                    </ImageListItem>
                                    <button
                                        onClick={() => {
                                            isFavorited
                                                ? dispatch(removeFromFavoritesAction(movie.id.toString()))
                                                : dispatch(addToFavoritesAction(movie.id.toString()));
                                        }}
                                    >
                                        {isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                                    </button>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </ImageList>
            )}
        </section>
    );
};

export default MovieListSection;
