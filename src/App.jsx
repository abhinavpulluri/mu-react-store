import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Logout from "./Logout";
export const AppContext = createContext();
function App() {
  const [users,setUsers] = useState([]);
  const [cart, setCart] = useState({});
  const [email, setEmail] = useState();
  return (
    <div>
      <AppContext.Provider value={{users,setUsers, cart, setCart, email, setEmail}}>
        <BrowserRouter>
          <Header name="mu-react-store" />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;