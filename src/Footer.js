import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Link to external CSS

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Gold API Section */}
        <div className="footer-section">
          <h4>Gold API</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/know-us">Know Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><Link to="/returns">30-Day Returns</Link></li>
            <li><Link to="/exchange">Lifetime Exchange</Link></li>
            <li><Link to="/buy-pack">Buy Pack</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/repairs">Repairs</Link></li>
            <li><Link to="/personalisation">Personalisation</Link></li>
            <li><Link to="/art">Art of Gifting</Link></li>
            <li><Link to="/lending">Lending</Link></li>
            <li><Link to="/gpr">Gold SIP and Reward</Link></li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li><Link to="/gold-subscription">Gold Subscription</Link></li>
            <li><Link to="/gold-investment">Gold Investment</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: <a href="mailto:hello@harmaig.com">hello@harmaig.com</a></li>
            <li>Mobile: <a href="tel:+917021920836">+91 7021920836</a></li>
            <li>Instagram: 
              <a href="https://www.instagram.com/harmaig_jewellers/" target="_blank" rel="noopener noreferrer">
                @harmaig_jewellers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 Harmaig Jewellers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
