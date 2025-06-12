import React from 'react'
import { useContext, useEffect } from 'react';
import { AppContext } from './App';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    const { setEmail } = useContext(AppContext);
    
    useEffect(() => {
        setEmail(null);
        navigate("/login");
    }, [setEmail, navigate]);

    return (
        <div>
            <h2>Logging you out...</h2>
        </div>
    );
}
