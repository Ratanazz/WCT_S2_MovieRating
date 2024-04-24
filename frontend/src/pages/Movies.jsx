import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Moviepage.css';
import { MOVIES_API_URL } from '../apiUrl';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(MOVIES_API_URL);
            setMovies(response.data);
        };

        fetchMovies();
    }, []);

    return (
        <div className="MoviePage">
            <div className='cardgroup'>
                {movies.map((movie, index) => (
                    <Link to={`/movie/${movie.id}`} key={index} className="link-style"> {/* Wrap each card with Link */}
                        <div className="card1" style={{ width: '13rem' }}>
                            <img src={movie.image_poster} className="card-img-top" alt="Movie Poster" />
                            <div className="card-body">
                                <div className='release_date'>
                                    <h1>{movie.name}</h1>
                                    <h2>Genre: <span className='info-span'>{movie.genre}</span> </h2>
                                    <h2>Rating: <span className='info-span'>{movie.rating}</span></h2>
                                    <h2>Release: <span className='info-span'>{movie.release_date}</span></h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Movies;
