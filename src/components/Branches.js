// src/Branches.js

import React, { useState } from 'react';
import './Branches.css'; // Import your CSS file

const branchesData = {
  Mumbai: [
    { name: 'Branch 1', address: 'Address 1, Mumbai' },
    { name: 'Branch 2', address: 'Address 2, Mumbai' },
  ],
  Delhi: [
    { name: 'Branch 1', address: 'Address 1, Delhi' },
    { name: 'Branch 2', address: 'Address 2, Delhi' },
  ],
  Bangalore: [
    { name: 'Branch 1', address: 'Address 1, Bangalore' },
    { name: 'Branch 2', address: 'Address 2, Bangalore' },
  ],
  // Add more cities and branches as needed
};

const Branches = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [branches, setBranches] = useState(branchesData[selectedCity]);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setBranches(branchesData[city]); // Update branches based on selected city
  };

  return (
    <div className="branches-container">
      <h1>Jewelry Shop Branches in India</h1>
      <select value={selectedCity} onChange={handleCityChange}>
        {Object.keys(branchesData).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <div className="map-container">
        <img
          src="https://media.istockphoto.com/id/590046136/vector/india-map-labelled-black.jpg?s=170667a&w=0&k=20&c=wVm0VOxoNgND-hJODa-SYsICR2wyYuunWaVXS-v3zb4=" // Example map image
          alt="India Map"
          className="map-image"
        />
        <div className="branches-list">
          {branches.map((branch, index) => (
            <div key={index} className="branch">
              <h3>{branch.name}</h3>
              <p>{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
