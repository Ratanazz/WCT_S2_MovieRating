import React, { useState, useEffect } from 'react';
// import api from 'axios';
import api from '../api';
import { useParams } from 'react-router-dom';
import './CssPage/MovieDetailCss.css';
import {
    FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, TelegramShareButton,
    TelegramIcon,
    // Add other social media components as needed
} from 'react-share';

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams(); // Retrieve the movie ID from the URL
    const [comments, setComments] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [newComment, setNewComment] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await api.get(`http://127.0.0.1:8000/api/movies/${id}`);
                setMovie(response.data.movie);
                setComments(response.data.comments || []);
                if (response.data.averageRating) {
                    setAverageRating(Number(response.data.averageRating) || 0);
                }
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setError('Failed to load movie details');
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('http://127.0.0.1:8000/api/comments', { movie_id: id, content: newComment });
            setComments([response.data, ...comments]);
            setNewComment('');
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleRatingSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('http://127.0.0.1:8000/api/ratings', { movie_id: id, rating: userRating });
            setAverageRating(Number(response.data.averageRating) || 0);
            setUserRating(0);
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!movie) return <div>Movie not found</div>;

    // For sharing
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
                            <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Share To:</h3>
                            <div className="buttonshare">
                                <FacebookShareButton url={shareUrl} quote={shareQuote} hashtag={shareHashtag}
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
                                    url={shareUrl} title={shareTitle} hashtag={shareHashtag}
                                    className="share-button">
                                    <TelegramIcon size={35} round />
                                </TelegramShareButton>
                            </div>
                        </div>
                    </div>
                    <div className="topright">
                        <h3>Global Rating: {movie.rating}/10</h3>
                        <h3>Audience Rate: 0/10</h3>
                        <iframe src={movie.trailer} frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="detail-info">
                <div className="movie-summary">
                    <h4 className="red-line-heading">Movie Summary</h4>
                    <p>{movie.summary}</p>
                </div>
                <div className="moviedetail-info">
                    <h4 className="red-line-heading">Content Rated:</h4>
                    <h5> {movie.rated_type}</h5>
                </div>
                <div className="moviedetail-info">
                    <h4 className="red-line-heading">Genre:</h4>
                    <h5>  {movie.genre}</h5>
                </div>
                <div className="moviedetail-info">
                    <h4 className="red-line-heading">Director:</h4>
                    <h5> {movie.director}</h5>
                </div>
                <div className="moviedetail-info">
                    <h4 className="red-line-heading">Writter:</h4>
                    <h5> {movie.wrtitter}</h5>
                </div>
                <div className="moviedetail-info">
                    <h4 className="red-line-heading">ReleaseDate:</h4>
                    <h5> {movie.release_date}</h5>
                </div>
                <div className="moviedetail-info">
                    <h4 className="red-line-heading">RunTime:</h4>
                    <h5> {movie.runtime_minutes}</h5>
                </div>
                <div className="moviedetail-info">
                    <h4 className="red-line-heading">Production:</h4>
                    <h5> {movie.production}</h5>
                </div>
            </div>

            <div className="user-interaction">
                <div className="rating-section">
                    <h4 className="red-line-heading">Rate This Movie</h4>
                    <p>Average User Rating: {Number(averageRating).toFixed(1)} / 10</p>
                    <form onSubmit={handleRatingSubmit}>
                        <select value={userRating} onChange={e => setUserRating(parseInt(e.target.value))}>
                            <option value="0">Select Rating</option>
                            {[1, 2, 3, 4, 5,6,7,8,9,10].map(num => (
                                <option key={num} value={num}>{num} Star{num !== 1 && 's'}</option>
                            ))}
                        </select>
                        <button type="submit" className="submit-button">Submit Rating</button>
                    </form>
                </div>

                <div className="comment-section">
                    <h4 className="red-line-heading">Comments</h4>
                    {comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <strong>{comment.user.name}</strong> said:
                            <p>{comment.content}</p>
                        </div>
                    ))}

                    <h4 className="red-line-heading">Add a Comment</h4>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                            placeholder="Your comment..."
                            required
                            className="comment-textarea"
                        />
                        <button type="submit" className="submit-button">Submit Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
