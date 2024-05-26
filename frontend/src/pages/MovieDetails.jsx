import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CssPage/MovieDetailCss.css';
import {
    FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,
    TelegramIcon,
    // Add other social media components as needed
 } from 'react-share';
function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams(); // Retrieve the movie ID from the URL
     


    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/movies/${id}`);
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
       //For sharing
       const shareUrl = window.location.href; // Get current page URL
       const shareTitle = `${movie.name} - Movie Rating`; // Dynamic title
       const shareQuote = ` Genre: ${movie.genre}, UserRating: ${movie.rating}/10`;
       const shareHashtag = '#movies #moviereview'; // Your desired hashtag

    return (
        <div className="Moviedetail-container">
            <div className="detailtop-container">
                <h1>{movie.name}</h1>
                <div className="Detailtop">
            
                    <div className="topleft">
            
                        <h2>{movie.genre}</h2>
                        <img src={movie.image_poster} alt="" />
                        <div className="social-share-buttons">
                            <h3 style={{ fontSize:'20px', fontWeight:'bold' }}>Share To:</h3>
                                 
                                     <div className="buttonshare">
                                         <FacebookShareButton url={shareUrl}  quote={shareQuote} hashtag={shareHashtag}
                                                                         className="share-button">
                                                                         <FacebookIcon size={35} round />
                                                </FacebookShareButton>
                                     </div>
                                            <div className='buttonshare'>
                                                <TwitterShareButton url={shareUrl} title={shareTitle} hashtags={['movies', 'moviereview']} via="your_mention" // Replace with your Twitter username
                                                className="share-button" >
                                                <TwitterIcon size={35} round />
                                                </TwitterShareButton>
                                            </div>
                                            
                                                <div className="buttonshare">
                                                    <TelegramShareButton
                                                        url={shareUrl}title={shareTitle}hashtag={shareHashtag}
                                                        className="share-button">
                                                        <TelegramIcon size={35} round />
                                                    </TelegramShareButton>
                                                </div>
                                            
                                 
                        </div>
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
                 <h4 class="red-line-heading">Content Rated:</h4>
                 <h5> {movie.rated_type}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Genre:</h4>
                 <h5>  {movie.genre}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Director:</h4>
                 <h5> {movie.director}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Writter:</h4>
                 <h5> {movie.wrtitter}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">ReleaseDate:</h4>
                 <h5> {movie.release_date}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">RunTime:</h4>
                 <h5> {movie.runtime_minutes}</h5>
             </div>
             <div className="moviedetail-info">
                 <h4 class="red-line-heading">Production:</h4>
                 <h5> {movie.production}</h5>
             </div>
            
            </div>
            

            
        </div>
    );
}

export default MovieDetails;
