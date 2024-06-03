import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams } from 'react-router-dom';
import './CssPage/MovieDetailCss.css';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon } from 'react-share';
import Commentmodal from '../components/Commentmodal';
import UserRating from '../components/UserRating';

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams(); // Retrieve the movie ID from the URL
    const [comments, setComments] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [newComment, setNewComment] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const openRatingModal = () => setShowRatingModal(true);
        
    

    const closeRatingModal = () => setShowRatingModal(false);
        
    
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

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

    const handleCommentSubmit = async (comment) => {
        if (comment) {
            try {
                const response = await api.post('http://127.0.0.1:8000/api/comments', { movie_id: id, content: comment });
                setComments([response.data, ...comments]);
            } catch (error) {
                console.error('Error submitting comment:', error);
            }
        }
    };

    const handleRatingSubmit = async (rating) => {
        try {
            const response = await api.post('http://127.0.0.1:8000/api/ratings', { movie_id: id, rating: rating });
            setAverageRating(Number(response.data.averageRating) || 0);
            closeRatingModal(); // Close the modal after the rating is submitted
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
                        <h3>Audience Rate: {Number(averageRating).toFixed(1)}/10</h3>
                        <h4 onClick={openRatingModal}>Your Rating</h4>
                        <UserRating
                
                showRatingModal={showRatingModal}
                closeRatingModal={closeRatingModal}
                userRating={userRating}
                setUserRating={setUserRating}
                handleRatingSubmit={handleRatingSubmit}
            />
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
            <div className="user-review-section">
                <div className="section-container">
                <div className="user-review-section-tittle">
                    <h4 className="red-line-heading">Audience Reviews</h4>
                    <h5 onClick={openModal}>+ Your Review</h5>
                </div>
                <div className="comment-box">
                    <div className="comment-card">
                        {comments.map(comment => (
                            <div key={comment.id} className="comment">
                                <strong>{comment.user.name}</strong> said:
                                <p>{comment.content}</p>
                                {comment.rating && (
                                <p>Rating: {comment.rating.rating}</p>
                            )}
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            <Commentmodal
                showModal={showModal}
                closeModal={closeModal}
                newComment={newComment}
                setNewComment={setNewComment}
                handleCommentSubmit={handleCommentSubmit}
            />
            <UserRating
                
                showRatingModal={showRatingModal}
                closeRatingModal={closeRatingModal}
                userRating={userRating}
                setUserRating={setUserRating}
                handleRatingSubmit={handleRatingSubmit}
            />
        </div>
    );
}

export default MovieDetails;

