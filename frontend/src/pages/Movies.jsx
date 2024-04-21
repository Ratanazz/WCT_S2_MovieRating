import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Moviepage.css';


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
    <div className="MoviePage">
      <div className='cardgroup'>
      {movies.map((movie, index) => (
        <div className="card" style={{ width: '13rem' }} key={index}>
          <img src={movie.image_poster} className="card-img-top" alt="Movie Poster" />
          <div className="card-body">
            <div className='release_date'>
              <h1 >{movie.name}</h1>
              <h2 >Genre: <span className='info-span'>{movie.genre}</span> </h2>
              <h2 >Rating: <span className='info-span'>{movie.rating}</span></h2>
              <h2 >Release: <span className='info-span'>{movie.release_date}</span></h2>
            </div>
      
      
          </div>
        </div>
      ))}
        </div>
    </div>
  
  )
}

export default Movies