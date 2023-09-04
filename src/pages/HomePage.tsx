import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="p-home">
            <h1>Your streaming guide for movies, TV shows & sports</h1>
            <button onClick={() => navigate('movies')}>Discover movies & TV shows</button>
        </div>
    );
};

export default HomePage;
