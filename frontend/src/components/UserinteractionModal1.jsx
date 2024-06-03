import React, { useState } from 'react';
import './Css/UserInteractModel.css';

function UserInteractionModal1({ showModal, closeModal, userRating, setUserRating, handleRatingSubmit, setNewComment, handleCommentSubmit }) {
    const [localRating, setLocalRating] = useState(userRating);
    const [localComment, setLocalComment] = useState('');

    if (!showModal) return null;

    const handleSubmit = () => {
        if (localRating !== 0) {
            handleRatingSubmit(localRating);
            setUserRating(localRating);
        }
        if (localComment.trim()) {
            handleCommentSubmit(localComment);
            setNewComment(localComment);
        }
        setLocalComment('');
        setLocalRating(0);
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
                            value={localRating} 
                            onChange={e => setLocalRating(parseInt(e.target.value))}
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
                            value={localComment}
                            onChange={e => setLocalComment(e.target.value)}
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

export default UserInteractionModal1;