import React from 'react';
import './Css/UserInteractModel.css';

function Commentmodal({ showModal, closeModal, userRating, setUserRating, handleRatingSubmit, newComment, setNewComment, handleCommentSubmit }) {
    if (!showModal) return null;

    const handleSubmit = () => {
        if (userRating !== 0) {
            handleRatingSubmit(userRating);
        }
        if (newComment.trim()) {
            handleCommentSubmit(newComment);
            setNewComment('');
        }
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="user-interaction">
                    <h4 className="red-line-heading">Your Review</h4>
                    <div className="rating-section">
                        <h5>Rate This Movie</h5>
                        <select 
                            value={userRating} 
                            onChange={e => setUserRating(parseInt(e.target.value))}
                        >
                            <option value="0">Select Rating</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                <option key={num} value={num}>{num} Star{num !== 1 && 's'}</option>
                            ))}
                        </select>
                    </div>
                    <div className="comment-section">
                        <h5>Add Your Comment</h5>
                        <textarea
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                            placeholder="Your thoughts on this movie..."
                            className="comment-textarea"
                        />
                    </div>
                    <button onClick={handleSubmit} className="submit-button">Submit Your Review</button>
                </div>
            </div>
        </div>
    );
}

export default Commentmodal;
