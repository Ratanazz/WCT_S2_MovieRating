// Signup.js
import React, { useState } from 'react';
import './CssPage/Signup.css'; // Import the CSS file for styling

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signing up with:', email, password, confirmPassword);
  };

  return (
    <div className="signup-bg">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
