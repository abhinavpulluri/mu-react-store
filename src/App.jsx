import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
export const AppContext = createContext();

function App() {
  const [user, setUser] = useState({});


  return (
    //empty tag is called fragment
    <div>
      <AppContext.Provider value = {{user, setUser}}>
        <Router>
          <Header name = "Mu-react-store"/>
          <Routes>
            <Route index element={<Home />} />
            <Route path= "/" element={<Home />} /> 
            <Route path= "/login" element={<Login />} /> 
            <Route path= "/register" element={<Register />} /> 
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
