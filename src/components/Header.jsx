import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(AppContext);

  const linkStyle = {
    color: "white",
    marginRight: "20px",
    textDecoration: "none",
  };

  return (
    <header style={{ backgroundColor: "#0d6efd", padding: "15px" }}>
      <div style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>
         My Online Shop
      </div>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
        {user.token ? (
          <Link to="/logout" style={linkStyle}>Logout</Link>
        ) : (
          <Link to="/login" style={linkStyle}>Login</Link>
        )}
        <Link to="/orders" style={linkStyle}>Orders</Link>
      </nav>
    </header>
  );
}