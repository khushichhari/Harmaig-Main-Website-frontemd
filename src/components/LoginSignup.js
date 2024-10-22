import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Initially display Login form

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between login and signup forms
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-form">
        <div className="toggle-buttons">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)} // Show Login form when clicked
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)} // Show Signup form when clicked
          >
            Sign Up
          </button>
        </div>
        <br />
        {isLogin ? (
          <form>
            <input
              type="text"
              placeholder="Username"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
            <p>
              Don't have an account? <span onClick={handleToggle}>Sign up</span>
            </p>
          </form>
        ) : (
          <form>
            <input
              type="email"
              placeholder="Email"
            />
            <input
              type="text"
              placeholder="Username"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <span onClick={handleToggle}>Login</span>
            </p>
          </form>
        )}
        <button className="google-button">
          Continue with
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZEbwjEeQHdYeC52v4m--wEMfynR0HeU8CQ&s"
            alt="Google Sign In"
          />
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
