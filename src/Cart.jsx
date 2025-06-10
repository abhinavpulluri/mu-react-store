import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";
import React from 'react'
import Login from "./Login";


export default function () {
    
    const Navigate = useNavigate();
    const {cart, setCart, email} = useContext(AppContext);

    const incrementQty = () => {
        setCart({...cart, qty: cart.qty + 1});
    }
    const decrementQty = () => {

        if (cart.qty > 0) {
            setCart({...cart, qty: cart.qty - 1});
        }
    }

    function handleLogin() {
        if (!email) {
            Navigate('/login');
        } else {
            Navigate('/cart');
        }
    }
  return (
    <div>
      <h2>My Cart</h2>
      <img src={cart.imgURL} alt={cart.name} />
      <h3>{cart.name}</h3>
      <p>{cart.desc}</p>
      <h3>Price:{cart.price}</h3>
      <p>
        <button onClick={decrementQty}>-</button>
        {cart.qty}
        <button onClick={incrementQty}>+</button>
      </p>
      <hr />
      <h2>Order Value:{cart.price * cart.qty}</h2>
      <hr />
      <p>
        {email ? <button>Place Order</button> : <button onClick= {handleLogin}>Login to Order</button>} 
      </p>
    </div>
  )
}
