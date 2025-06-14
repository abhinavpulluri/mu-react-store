import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";
import React from 'react'
import Login from "./Login";


export default function Cart() {
    
    const Navigate = useNavigate();
    const {cart, setCart, email, orders, setOrders} = useContext(AppContext);

    const incrementQty = () => {
        setCart({...cart, qty: cart.qty + 1});
    }
    const decrementQty = () => {

        if (cart.qty > 0) {
            setCart({...cart, qty: cart.qty - 1});
        }
    }

    function handleLogin() {
        Navigate('/login');
    }
    function placeOrder() {
        setOrders([...orders, cart]);
        setCart({});
        Navigate('/order');
    }
  return (
    <div>
      <h2>My Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <>
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
            {email ? (
              <button onClick={placeOrder}>Place Order</button>
            ) : (
              <button onClick={handleLogin}>Login to Order</button>
            )}
          </p>
        </>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </div>
  )
}
