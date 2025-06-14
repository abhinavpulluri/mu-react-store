import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './App';
import axios from 'axios';

export default function Home() {
    const {cart, setCart, email} = useContext(AppContext);
    const [products, setProducts] = useState([]);
    const Navigate = useNavigate();
    const API = import.meta.env.VITE_API_URL;
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = `${API}/api/products`;
                const res = await axios.get(url);
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const buyNow = (obj) => {
        setCart({id: obj.id, name: obj.name, price: obj.price, desc: obj.desc, imgURL: obj.imgURL, qty: 1, email: email});
        Navigate('/cart');
    }
    
    return (
    <div className='App-Home-Row'>
        {products.length === 0 ? (
            <p>No products found.</p>
        ) : (
            products.map((product) => (
                <div key={product.id}>
                    <img src={product.imgURL} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                    <h4>Price: ₹{product.price}</h4>
                    <p><button onClick={()=>buyNow(product)}>Buy now</button></p>
                    <hr />
                </div>
            ))
        )}
    </div>
  )
}
