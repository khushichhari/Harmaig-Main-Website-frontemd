// src/Wishlist.js
import React, { useState } from 'react';
import './Wishlist.css'; // Add styles for the wishlist

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add items to the wishlist
  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove items from the wishlist
  const removeFromWishlist = (itemToRemove) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty. Start adding items!</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button className = "bTn2" onClick={() => removeFromWishlist(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className = "bTn" onClick={() => addToWishlist({ id: 1, name: 'Gold Necklace', description: 'Beautiful gold necklace', image: 'https://via.placeholder.com/100' })}>
        Add Gold Necklace
      </button>
    </div>
  );
};

export default Wishlist;
