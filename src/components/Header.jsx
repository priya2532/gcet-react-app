import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ backgroundColor: "#4db8ff", padding: "15px" }}>
      <h1 style={{ backgroundColor: "#ffb3b3", padding: "10px", borderRadius: "10px" }}>
        My Online Shop
      </h1>
      <nav style={{ fontSize: "18px" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/cart" style={{ margin: "0 10px" }}>Cart</Link>
        <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
      </nav>
      <hr />
    </div>
  );
}