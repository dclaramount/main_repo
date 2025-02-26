import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'; // Import your AuthContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPage.css'; // Import CSS for styling

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(''); // State for error messages (optional)

  const { login } = useAuth(); // Access the login function from AuthContext
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    // Basic validation (you can replace this with your own logic)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      login(); // Call the login function to update authentication state
      navigate('/'); // Navigate to the home page or dashboard after login
    } catch (err) {
      setError('Failed to log in. Please try again.'); // Handle login errors (if any)
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome Back!</h1>
        <p>Bring your ideas to life.</p>
        <form className="login-form" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>} {/* Display error messages */}
          
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-button">Login</button>
          
          <div className="social-login">
            <p>Or sign in with:</p>
            <button type="button" className="google-login">Google</button>
            <button type="button" className="facebook-login">Facebook</button>
          </div>
        </form>
      </div>

      <div className="login-right">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/background-login.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <img src="/path/to/your/image.jpg" alt="Motivational Illustration" />
        <p className="tagline">“Bring your ideas to life.”</p> */}
      </div>
    </div>
  );
};

export default LoginPage;
