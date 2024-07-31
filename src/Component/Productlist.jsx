// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./productitem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.example.com/products");
        // Check if the response data is an array
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
          setError("Unexpected data format received");
        }
      } catch (err) {
        console.error("Error fetching products:", err); // Log the error for debugging
        setError("Network error: Could not fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => <ProductItem key={product.id} product={product} />)
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
};

export default ProductList;
