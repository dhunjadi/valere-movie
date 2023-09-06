import {useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const {favoritedMovies} = useSelector((state: StoreState) => state.movieReducer);
    const [searchText, setSearchText] = useState<string>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const handleSearchIconClick = () => {
        inputRef.current?.focus();
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
            </div>

            <div className="c-navbar__favorites">
                <IconButton color="inherit" onClick={toggleDropdown}>
                    <FavoriteIcon />
                </IconButton>

                <div className={`c-navbar__dropdown ${isDropdownOpen && 'is-open'}`}>
                    {favoritedMovies.map((movie) => {
                        return (
                            <div key={movie.id} className="c-navbar__dropdown_item" onClick={() => navigate(`movies/${movie.id}`)}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                                <span>{movie.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
