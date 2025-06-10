import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Register() {
    
    const [count, setCount] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        alert("Hello World");
    };
    const updateCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count - 1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowDetails(true);
        console.log('Name:', user.name, 'Email:', user.email, 'Password:', user.pass);
    };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <p><input type="text" placeholder='Name' onChange={(e) => setUser({ ...user, name: e.target.value})}/></p>
        <p><input type="email" placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })}/></p>
        <p><input type="password" placeholder='Password' onChange={(e) => setUser({ ...user, pass: e.target.value })}/></p>
        <p><button type="submit">Submit</button></p>
      </form>
      {/* {showDetails && (
        <div style={{marginTop: '1em', border: '1px solid #ccc', padding: '1em'}}>
          <h3>Registration Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> {user.pass}</p>
        </div>
      )} */}
        <hr />
        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Forgot password? <a href="/forgot-password">Reset Password</a></p>
        <hr />
            <button onClick={handleClick}>Click</button>
        <hr />
        <h4>
            {count}<br></br>
            <button onClick={updateCount}>+</button>
            <button onClick={decreaseCount}>-</button>
         </h4>

        <hr />
        
    </div>
  )
}
