import {useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar = () => {
    const [searchText, setSearchText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSearchIconClick = () => {
        inputRef.current?.focus();
    };
    return (
        <header className="c-navbar">
            <div className="c-navbar__logo">
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
                <IconButton color="inherit">
                    <FavoriteIcon />
                </IconButton>
            </div>
        </header>
    );
};

export default Navbar;
