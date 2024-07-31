// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <h4>{item.name}</h4>
      <p>${item.price.toFixed(2)}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, e.target.value)}
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
