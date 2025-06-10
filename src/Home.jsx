import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    let age = 21;
    let name = "John";
    const products = [
        {id: 1, name: "Product 1", price: 100, desc:"This is the description of product 1",imgURL:"https://picsum.photos/id/1/300/300"},
        {id: 2, name: "Product 2", price: 200, desc:"This is the description of product 2",imgURL:"https://picsum.photos/id/2/300/300"},
        {id: 3, name: "Product 3", price: 300, desc:"This is the description of product 3",imgURL:"https://picsum.photos/id/3/300/300"},
    ];

    const navigate = useNavigate();
    
    return (
    <div className='App-Home-Row'>
        {/* My name is {name}. My age is {age}. */}
        {products.map((product) => (
            <div key={product.id}>
                <img src={product.imgURL} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <h4>Price: ₹{product.price}</h4>
                <p><button onClick={() => navigate('/cart')}>Buy now</button></p>
                <hr />
            </div>
        ))}
    </div>
  )
}
