import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Header from "./components/Header";

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <UserContext.Provider value={{ users, setUsers, message, setMessage }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Product />} />
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <footer style={{ textAlign: "center", marginTop: 40 }}>
          <hr />
          &copy; 2005. All rights Reserved.
        </footer>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;