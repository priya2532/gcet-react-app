import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

// 🌐 Create global context
export const AppContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({}); // Logged-in user
  const[cart,setCart]=useState([]);

  const addToCart = (product) => {
  setCart(prevCart => {
    const existing = prevCart.find(item => item._id === product._id);
    let newCart;
    if (existing) {
      newCart = prevCart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...prevCart, { ...product, quantity: 1 }];
    }
    console.log("Cart updated:", newCart);
    return newCart;
  });
};


  return (
    <AppContext.Provider value={{ users, setUsers, user, setUser,cart,addToCart }}>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;