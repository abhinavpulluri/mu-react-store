import React from 'react'
import { useContext } from 'react';
import { AppContext } from './App';
import { useNavigate } from 'react-router-dom';
export default function Logout() {
    const Navigate = useNavigate();
    const {email, setEmail} = useContext(AppContext);
    setEmail(null);
    
    Navigate("/login")
  return (
    <div>Logout</div>
  )
}
