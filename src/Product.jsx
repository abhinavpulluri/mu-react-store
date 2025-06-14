import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Product() {
    const [products, setProducts] = useState([]);
    const API = import.meta.env.VITE_API_URL;
    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const res = await axios.get(url);
            setProducts(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
  return (
    <div>
      <h1>Product Component</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
