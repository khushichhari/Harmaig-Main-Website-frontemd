import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GP&R.css'; // Link to external CSS for styling

const GPR = () => {
    const navigate = useNavigate(); // Hook for navigation
  
    const goBack = () => {
      navigate(-1); // Navigate back to the previous page
    };
  return (
    <div className="gpr-container">
        <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>SIP (Systematic Investment Plan) - Harmaig Terms and Conditions</h1>
      <ul>
        <li>
          <strong>Plan Options:</strong> Harmaig’s SIP allows customers to make fixed monthly contributions toward the purchase of jewellery. The plans are available for a minimum investment of INR 1,000 per month.
        </li>
        <li>
          <strong>Tenure:</strong> The SIP tenure can range from 6 months to 24 months. At the end of the tenure, the accumulated amount can be used to purchase jewellery from Harmaig.
        </li>
        <li>
          <strong>Harmaig Contribution:</strong> For customers who pay consistently for 11 months, Harmaig will cover the payment for the 12th and final month, allowing customers to enjoy an extra month’s contribution as a benefit.
        </li>
        <li>
          <strong>Payment Mode:</strong> Monthly SIP payments can be made via auto-debit from the customer’s bank account, UPI, or credit/debit card. Failure to make timely payments may result in plan cancellation or penalties.
        </li>
        <li>
          <strong>Purchase Value:</strong> The value of the jewellery purchased at SIP maturity will be based on the prevailing gold and diamond rates. Discounts or rate locks are not applicable.
        </li>
        <li>
          <strong>Pre-Mature Withdrawal:</strong> Customers can exit the SIP before completing the tenure. However, the amount paid will be adjusted toward any available purchase at the time, and no cash refunds will be provided.
        </li>
        <li>
          <strong>Non-Transferable:</strong> SIP accounts and their associated benefits are non-transferable. The amount can only be used by the account holder to make purchases from Harmaig.
        </li>
        <li>
          <strong>Additional Benefit:</strong> If the customer has successfully paid for 11 months, Harmaig will make the 12th month’s payment on their behalf, and the jewellery order corresponding to the accumulated amount will be automatically placed.
        </li>
        <li>
          <strong>Features:</strong> Gold Subscription, Gold Investment
        </li>
      </ul>
    </div>
  );
};

export default GPR;
