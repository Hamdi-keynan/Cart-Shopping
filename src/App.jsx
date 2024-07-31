// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/Cartcontext';
import ProductList from './Component/Productlist';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import StaticPage from './staticpage'; // Import the StaticPage component

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/static" element={<StaticPage />} /> {/* Route for the StaticPage */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
