import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CssPage/MovieDetailCss.css';
function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams(); // Retrieve the movie ID from the URL

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/movies/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="Moviedetail-container">
            <div className="detailtop-container">
                <h1>{movie.name}</h1>
                <div className="Detailtop">
            
                    <div className="topleft">
            
                        <h2>{movie.genre}</h2>
                        <img src={movie.image_poster} alt="" />
                    </div>
                    <div className="topright">
                        <h3>Global Rating: {movie.rating}/10</h3>
                        <h3>Audience Rate:  0/10</h3>
                        <iframe src={movie.trailer} frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="detail-info">
             <div className="movie-summary">
                 <h4 class="red-line-heading">Movie Summary</h4>
                 <p>{movie.summary}</p>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Rating:</h4>
                 <h5> R (Sexual Content/Nudity|Language Throughout|Drug Use|Strong Bloody Violence)</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Genre:</h4>
                 <h5>  {movie.genre}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Director:</h4>
                 <h5> John Paessano</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Writter:</h4>
                 <h5> John Paessano</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">ReleaseDate:</h4>
                 <h5> {movie.release_date}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">RunTime:</h4>
                 <h5> 2h</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Production:</h4>
                 <h5> ABC</h5>
             </div>
            
            </div>
        </div>
    );
}

export default MovieDetails;
