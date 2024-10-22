import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import './ContactUs.css'; // Link to external CSS for styling

const Contact = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="contact-container">
       <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>Contact Us</h1>

      <h2>Co-Founders</h2>
      <div className="contact-person">
        <p><strong>Manasvi Kushwaha</strong><br />
          Co-Founder<br />
          +91 7021920836<br />
          <a href="mailto:manasvi@harmaig.com">manasvi@harmaig.com</a>
        </p>
      </div>

      <div className="contact-person">
        <p><strong>Yeeshu Soni</strong><br />
          Co-Founder<br />
          +91 9516136454<br />
          <a href="mailto:yeeshu@harmaig.com">yeeshu@harmaig.com</a>
        </p>
      </div>

      <h2>CEO</h2>
      <div className="contact-person">
        <p><strong>Vishal Tiwari</strong><br />
          Chief Executive Officer<br />
          +91 9118446955<br />
          <a href="mailto:vishal.harmaig@gmail.com">vishal.harmaig@gmail.com</a>
        </p>
      </div>

      <h2>Sales</h2>
      <div className="contact-person">
        <p><strong>Mohammad Hasaan Naurez</strong><br />
          Chief Sales Officer<br />
          +91 7033778219<br />
          <a href="mailto:hasaan.harmaig@gmail.com">hasaan.harmaig@gmail.com</a>
        </p>
      </div>

      <h2>Marketing</h2>
      <div className="contact-person">
        <p><strong>Poorvi Agarwal</strong><br />
          Chief Marketing Officer<br />
          +44 7741 914852<br />
          <a href="mailto:poorvi.harmaig@gmail.com">poorvi.harmaig@gmail.com</a>
        </p>
      </div>

      <h2>Design</h2>
      <div className="contact-person">
        <p><strong>Harsh Vara</strong><br />
          Chief Design Officer<br />
          +91 90015001695<br />
          <a href="mailto:harsh.harmaig@gmail.com">harsh.harmaig@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
