// src/components/StaticPage.js
import React from 'react';

const StaticPage = () => {
  return (
    <div>
      <h1>Welcome to Our Shopping Cart Application</h1>
      <p>This is a static HTML page integrated into the React application.</p>
      <ul>
        <li>Product 1: Description and price.</li>
        <li>Product 2: Description and price.</li>
      </ul>
      <p>For more information, visit our <a href="/contact">Contact Page</a>.</p>
    </div>
  );
};

export default StaticPage;
