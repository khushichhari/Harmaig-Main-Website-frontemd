import React from 'react';
import './Terms&Conditions.css'; // Link to external CSS for styling
import { useNavigate } from 'react-router-dom'; 

const TermsConditions = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="terms-container">
            <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>Terms & Conditions</h1>

      <h2>Services</h2>
      <h3>Repairs - Harmaig Terms and Conditions</h3>
      <ul>
        <li>
          <strong>Eligibility:</strong> Repairs will be carried out only on jewellery purchased from Harmaig. Proof of purchase (invoice, certificate) must be presented.
        </li>
        <li>
          <strong>Free Repairs:</strong> Jewellery under warranty will be repaired free of charge, subject to normal wear and tear conditions. Damage caused by mishandling, accidents, or unauthorized repairs will void the warranty.
        </li>
        <li>
          <strong>Repair Charges:</strong> For products out of warranty, repair costs will be based on the extent of damage, including material costs (if applicable). Customers will receive a quotation before any work is undertaken.
        </li>
        <li>
          <strong>Timeline:</strong> The time required for repairs depends on the complexity of the work. Customers will be informed of the estimated delivery date.
        </li>
        <li>
          <strong>Exclusions:</strong> Customized or highly intricate jewellery may not be eligible for standard repair services.
        </li>
      </ul>
    </div>
  );
};

export default TermsConditions;
