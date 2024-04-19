import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import for creating links


function Movies() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://127.0.0.1:8000/movies'); // Replace with your API endpoint
      setMovies(response.data);
    };

    fetchMovies();
  }, []);
  return (
    <div><ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        <h2>{movie.name}</h2>
        <p>
          {movie.summary.substring(0, 100)}... {/* Truncate summary to first 100 characters and add ellipsis */}
          <br />
          Genre: {movie.genre} <br />
          Release Date: {movie.release_date} <br />
          Rating: {movie.rating}
        </p>
        <Link to={`/movies/${movie.id}`}>Details</Link> {/* Create link to movie details page */}
      </li>
    ))}
  </ul>
  </div>
  )
}

export default Movies