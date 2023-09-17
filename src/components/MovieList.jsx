import PropTypes from 'prop-types';
import './MovieList.css';
import data from '../film.json';
import Movie from './Movie';

const MovieList = ({ value }) => {
    const filteredMovies = data.filter((movie) => {
        if (value === '') {
            return movie;
        } else {
            return movie.Title.toLowerCase().includes(value.trim());
        }
    });
    return (
        <div className='movie-list'>
            {filteredMovies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </div>
    );
};

MovieList.propTypes = {
    value: PropTypes.string
};

export default MovieList;