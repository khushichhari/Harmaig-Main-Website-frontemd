// src/components/Footer.jsx
import React from 'react';
import './Home.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h5>Follow Us</h5>
        <div className="social-media-icons">
          <a href="/" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="/" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="/" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="/" className="social-icon"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Harmaig. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
