import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import BaseLayout from './layouts/BaseLayout';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="movies" element={<MoviesPage />} />
                        <Route path="movies/:id" element={<MovieDetailsPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
