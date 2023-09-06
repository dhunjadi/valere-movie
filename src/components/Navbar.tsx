import {useEffect, useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {useNavigate} from 'react-router-dom';
import {getMoviesBySearch} from '../services/movieServices';
import {Movie} from '../types';
import {useDebounce} from '../hooks/useDebounce';
import Dropdown from './Dropdown';

const Navbar = () => {
    const {favoritedMovies} = useSelector((state: StoreState) => state.movieReducer);
    const [searchText, setSearchText] = useState<string>('');
    const [isFavoritesDropdownOpen, setIsFavoritesDropdownOpen] = useState<boolean>(false);
    const [moviesInSearch, setMoviesInSearch] = useState<Movie[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const debouncedValue = useDebounce(searchText, 1000);

    useEffect(() => {
        searchText ? getMoviesBySearch(debouncedValue).then((res) => setMoviesInSearch(res.results)) : setMoviesInSearch([]);
    }, [debouncedValue, searchText]);

    const handleSearchIconClick = () => {
        inputRef.current?.focus();
    };

    const toggleDropdown = () => {
        setIsFavoritesDropdownOpen(!isFavoritesDropdownOpen);
    };

    return (
        <header className="c-navbar">
            <div className="c-navbar__logo" onClick={() => navigate('/movies')}>
                <strong>VALERIS</strong>
            </div>

            <div className="c-navbar__search">
                <div className="c-navbar__search_icon" onClick={handleSearchIconClick}>
                    <SearchIcon />
                </div>

                <input
                    type="search"
                    ref={inputRef}
                    value={searchText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                />

                {moviesInSearch.length > 0 && <Dropdown title="Search" items={moviesInSearch} isOpen={moviesInSearch.length > 0} />}
            </div>

            <div className="c-navbar__favorites">
                <IconButton color="inherit" onClick={toggleDropdown}>
                    <FavoriteIcon />
                </IconButton>
            </div>

            {isFavoritesDropdownOpen && <Dropdown title="Favorites" items={favoritedMovies} isOpen={isFavoritesDropdownOpen} />}
        </header>
    );
};

export default Navbar;
