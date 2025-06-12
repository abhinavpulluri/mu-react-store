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
import Order from "./Order";
import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";

export const AppContext = createContext();
function App() {
  const [users,setUsers] = useState([]);
  const [cart, setCart] = useState({});
  const [email, setEmail] = useState();
  const [orders, setOrders] = useState([]);

  const fetchUsers = async() => {
    try {
      const url = "http://localhost:8080/users";
      const res = await axios.get(url);
      setUsers(res.data);
      } catch (error) {
            console.error('Error fetching users:', error);
      }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <AppContext.Provider value={{users,setUsers, cart, setCart, email, setEmail, orders, setOrders}}>
        <BrowserRouter>
          <Header name="mu-react-store" />
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;