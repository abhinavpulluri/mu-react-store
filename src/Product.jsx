import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Product() {
    // const [count, setCount] = useState(0);


    const fetchProducts = async () => {
        const url = "http://localhost:8080/products";
        const res = await axios.get(url)


    };

    useEffect(() => {
        fetchProducts();
    }, [count]);
  return (
    <div>
      <h1>Product Component</h1>
      {count}
      <p><button onClick = {() => setCount(count+1)}>Update count</button></p>
    </div>
  )
}
