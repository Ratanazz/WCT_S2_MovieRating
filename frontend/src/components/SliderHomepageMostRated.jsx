import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick'; // Import from 'react-slick'
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import theme (optional)
import axios from 'axios';
import './Css/SliderHomepageCss.css';

function SliderHomeMostRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://127.0.0.1:8000/movies'); // Replace with your API endpoint
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  return (
    <div className="container">
      <div className="tittle">
        <h1>Most Rated</h1>
        
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className="movie-card">
                <img src={movie.image_poster} alt={movie.name} />
                <div className="infocard">
                  <h2>{movie.name}</h2>
                  <div className="addicon">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" , paddingRight:'5px'}} />
                    <h3>{movie.rating}</h3>
                  </div>
                  <h3><span className='bold'>Genre:</span>{movie.genre}</h3>
                  <h3><span className='bold'>Release:</span>{movie.release_date}</h3>
                </div>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderHomeMostRated;
