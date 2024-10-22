import React from 'react';
import './Personalisation.css'; // Link to external CSS for styling
import { useNavigate } from 'react-router-dom';


const Personalisation = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="personalisation-container">
      <i onClick = {goBack} class="fa-solid fa-arrow-left"></i>
      <h1>Personalisation - Harmaig Terms and Conditions</h1>
      <ul>
        <li>
          <strong>Customization Scope:</strong> Personalisation services include engraving, resizing, and custom design modifications. All personalization requests are subject to feasibility based on the jewellery's design and material.
        </li>
        <li>
          <strong>Charges:</strong> Additional charges may apply for personalization services, depending on the complexity of the request and materials used. These will be communicated before proceeding with the work.
        </li>
        <li>
          <strong>Non-Refundable:</strong> Customized products are non-refundable and non-returnable under the 30-day money back policy unless there is a manufacturing defect.
        </li>
        <li>
          <strong>Timeframe:</strong> The completion of personalized orders depends on the extent of customization. Estimated timelines will be provided, and delays due to complex customizations may occur.
        </li>
        <li>
          <strong>Approval Process:</strong> For extensive customizations, Harmaig will provide design mockups. Once approved by the customer, further changes will not be accepted.
        </li>
      </ul>
    </div>
  );
};

export default Personalisation;
