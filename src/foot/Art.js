import React from 'react';
import './Art.css'; // Link to external CSS for styling
import { useNavigate } from 'react-router-dom'; 

const Art = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
    <div className="art-container">
    <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>Art of Gifting - Harmaig Terms and Conditions</h1>
      <ul>
        <li>
          <strong>Gift Packaging:</strong> All purchases can be packaged in premium Harmaig gift boxes upon request. This service is complimentary for select items.
        </li>
        <li>
          <strong>Gift Vouchers:</strong> Harmaig gift vouchers are available for purchase and can be redeemed within 12 months from the date of issue. Vouchers are non-transferable and cannot be exchanged for cash.
        </li>
        <li>
          <strong>Gift Returns:</strong> Products received as gifts can be returned within 30 days, subject to standard return policies. The refund will be issued as Harmaig Credits to the recipient’s account, which can be used for future purchases.
        </li>
        <li>
          <strong>Gift Exchanges:</strong> Gift recipients may opt for exchanges under our Lifetime Exchange policy. However, any price differences between the exchanged items will be adjusted accordingly.
        </li>
      </ul>
    </div>
    </>
  );
};

export default Art;
