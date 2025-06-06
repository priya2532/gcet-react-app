import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Order from "./components/Order";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

// 🌐 Create global context
export const AppContext = createContext();

 function App() {
   const [users, setUsers] = useState([]);
   const [user, setUser] = useState({}); // Logged-in user
   const [products, setProducts] = useState([]);
   const[cart,setCart]=useState({});

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
    <div>
      <AppContext.Provider
        value={{
          users,
          setUsers,
          user,
          setUser,
          products,
          setProducts,
          cart,
          setCart,
          addToCart
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
             <Route path="/order" element={<Order />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;