import React from 'react'
import { useContext } from 'react';
import { AppContext } from './App';
import { useNavigate } from 'react-router-dom';

export default function Order() {
    const {orders, email} = useContext(AppContext);
  return (
    <div>
      <h3>My Orders</h3>
      {orders.map((order) => (
        order.email === email && (
        <div key = {order.id}>
          <img src={order.imgURL} alt={order.name} />
          <h3>{order.name}</h3>
          <p>{order.desc}</p>
          <h3>Price: ₹{order.price}</h3>
          <h4>Quantity: {order.qty}</h4>
          <hr />
        </div>
        )
      ))}
    </div>
  )
}
