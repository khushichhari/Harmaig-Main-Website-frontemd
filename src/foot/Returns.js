import React from 'react';
import './Returns.css'; // Link to external CSS for styling
import { useNavigate } from 'react-router-dom'; 

const Returns = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="returns-container">
      <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>Policies</h1>
      <h2>Harmaig's 30-Day Money Back Policy</h2>
      <p>
        Under our 30-day money back policy (note: this does not apply to solitaires above INR 3 lakh and coins), you will receive a 100% refund, credited to your Harmaig account.
      </p>
      <p>
        <strong>Harmaig Cash:</strong> You can choose to have the refund sent to your original payment method or bank account.
      </p>
      <p>
        <strong>Harmaig Gold Wallet:</strong> You can use this credit for future purchases, but the amount cannot be refunded in cash.
      </p>
      <h2>Will I have to pay for return shipping under the 30-day money back policy?</h2>
      <p>
        No, we offer FREE return shipping across India for all products under this policy.
      </p>
      <h2>How do I return a product to Harmaig within 30 days?</h2>
      <p>Select the item you wish to return from your order.</p>
      <ol>
        <li>Pack the jewellery in its original packaging along with any certification.</li>
        <li>
          If the product is valued under INR 35,000, simply hand it over to the pickup personnel.
        </li>
        <li>
          For products valued above INR 35,000:
          <ul>
            <li>If a Harmaig employee picks up the item, hand it over directly.</li>
            <li>
              If a third-party logistics partner handles the pickup, you'll receive a tamper-proof packet from us. Secure and seal your jewellery in it before handing it over. Once sealed, the packet cannot be opened without destroying it.
            </li>
          </ul>
        </li>
        <li>
          Collect a receipt or confirmation of the pickup (e.g., paper receipt, tracking photo, SMS confirmation).
        </li>
      </ol>
      <p>
        Once we receive the product at our facility and complete a quality check, your refund will be processed within 2-3 working days to your Harmaig account.
      </p>
    </div>
  );
};

export default Returns;
