// src/components/HtmlContent.js
import React from 'react';

const HtmlContent = () => {
  const htmlString = `
    <h1>Special Offers</h1>
    <p>Check out our special offers below:</p>
    <ul>
      <li>Offer 1: Discount details.</li>
      <li>Offer 2: Discount details.</li>
    </ul>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};

export default HtmlContent;
