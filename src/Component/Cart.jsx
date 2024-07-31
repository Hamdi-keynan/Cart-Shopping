// src/components/Cart.js
import React, { useContext } from 'react';
import CartItem from './Cartitem';
import { CartContext } from '../Context/Cartcontext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    // Ensure cart is an array before attempting to reduce
    if (!Array.isArray(cart)) {
      return "0.00";
    }

    return cart.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0).toFixed(2);
  };
 

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
