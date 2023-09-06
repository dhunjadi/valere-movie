import {useNavigate} from 'react-router-dom';
import {Movie} from '../types';

interface DropdownProps {
    title: string;
    items: Movie[];
    isOpen: boolean;
}

const Dropdown = ({title, items, isOpen}: DropdownProps) => {
    const navigate = useNavigate();
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`c-dropdown ${isOpen && 'is-open'}`}>
            <div className="c-dropdown__header">
                <h3>{title}</h3>{' '}
            </div>
            {items.map((movie) => (
                <div key={movie.id} className="c-dropdown__item" onClick={() => navigate(`movies/${movie.id}`)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                    <span>{movie.title}</span>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
