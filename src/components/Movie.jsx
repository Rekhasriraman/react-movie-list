import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import './Movie.css';

const Movie = ({ movie }) => {
    
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const handleLike = () => {
        setLiked(true);
        setDisliked(false);
    };

    const handleDislike = () => {
        setLiked(false);
        setDisliked(true);
    };

    return (
        <div className={`movie-container ${liked ? 'liked' : disliked ? 'disliked' : ''}`}>
            <div className='movie-poster'>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className='movie-details'>
                <h2>{movie.Title}</h2>
                <div className='like-btn-container'>
                    <button onClick={handleLike} className={`like-button ${liked ? 'active' : ''}`}>
                        <AiOutlineLike color={liked ? 'green' : 'white'} />
                    </button>
                    <button onClick={handleDislike} className={`dislike-button ${disliked ? 'active' : ''}`}>
                        <AiOutlineDislike color={disliked ? 'red' : 'white'} />
                    </button>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object.isRequired
};

export default Movie;