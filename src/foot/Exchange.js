import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Exchange.css'; // Link to external CSS for styling

const Exchange = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  }
  return (
    <div className="exchange-container">
        <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>Lifetime Exchange and Buy-Pack</h1>
      <p>
        We offer Lifetime Exchange and Buy-Back for all Harmaig purchases within India. You can initiate these processes by visiting a store or through an online request. The exchange or buy-back value will be based on the market price on the day of the request. For online exchanges or buy-backs, a processing charge of INR 500 for shipping and handling will be applied. If done at a store, no such charge will be applicable.
      </p>
      <h2>Please note:</h2>
      <ul>
        <li>Any discounts or gifts received during your purchase will be deducted from the refund or exchanged value. You may also choose to return the gift.</li>
        <li>If a solitaire certificate is missing, a standard deduction of INR 3,500 will apply. For larger solitaires, the deduction may be higher depending on the size.</li>
      </ul>
      <h2>Lifetime Exchange</h2>
      <p>
        The final exchange value will be credited as Harmaig Gold Wallet after a Quality Check (QC). These credits are valid for 365 days and can be used to purchase jewellery (excluding Coins and Solitaires). Credits cannot be converted into cash.
      </p>
      <h2>Lifetime Buy-Back</h2>
      <p>
        The final buy-back value will be credited as Harmaig Cash in Harmaig Gold Wallet after QC. This cash is valid for 365 days and can be used for future purchases or can be encashed.
      </p>
    </div>
  );
};

export default Exchange;
