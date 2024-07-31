// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [address, setAddress] = useState('');

  const handleCheckout = () => {
    // Handle the checkout process here
    console.log('Order placed!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
