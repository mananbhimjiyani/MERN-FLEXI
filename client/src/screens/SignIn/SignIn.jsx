import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Person from "../../assets/PersonIcon.svg";
import { signin } from "../../authServices/authServices";
import Lottie from "react-lottie";
import loadingAnimation from "../../assets/loadingAnimation.json"; 

// Lottie animation from App.jsx used here 
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function SignIn() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await signin({ email, password });

      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem('token', data.token); // Save JWT token
        navigate("/dashboard");
      }
    } catch (err) {
      setError('Network error occurred');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="welcome-screen">
      <div className="center-container">
        <h1 className="welcome-text">ENTER <br />YOUR DETAILS</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button phone-login" disabled={isLoading}>
            <div className="icon-circle">
              <img
                src={Person}
                alt="Person Icon"
                width="24"
                height="24"
              />
            </div>
            <div className="text-container">Sign In</div>
          </button>
          {isLoading && (
            <div className="loading-animation">
              <Lottie options={defaultOptions} height={100} width={100} />
            </div>
          )}
          {error && <p className="error-text">{error}</p>}
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;