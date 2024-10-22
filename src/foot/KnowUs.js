import React from 'react';
import './KnowUs.css'; // Optional: link to external CSS for styling
import { useNavigate } from 'react-router-dom';

const KnowUs = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="know-us-container">
          <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>Know Us</h1>
      <p>
        We are a direct-to-consumer (D2C) jewelry brand, backed by a rich family heritage in the jewelry business since 1992. Now, we're embarking on an online venture led by IIT Bombay students.
      </p>
      <p>
        We are <strong>Artisans of Opulence</strong>, crafting pioneering gold designs with supreme trust, premium service, and blazing speed in the world of luxury—where every opus embodies emotion, sophistication, and revolution.
      </p>
    </div>
  );
};

export default KnowUs;
