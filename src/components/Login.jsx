import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App"; // Reuse App's context

export const useUser = () => useContext(UserContext);

const containerStyle = {
  width: "300px",
  margin: "40px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const inputStyle = {
  margin: "10px 0",
  padding: "8px",
  width: "90%",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "skyblue",
  cursor: "pointer"
};

function Register({ toggle }) {
  const { users, setUsers, setMessage } = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!username || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    const exists = users.some(
      (u) => u.username === username || u.email === email
    );

    if (exists) {
      setMessage("Username or email already exists.");
    } else {
      setUsers([...users, { username, email, password }]);
      setMessage(`Registered as ${username}. Please log in.`);
      toggle();
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Register</h2>
      <input style={inputStyle} placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />
      <input style={inputStyle} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input style={inputStyle} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button style={buttonStyle} onClick={handleRegister}>Submit</button>
      <button style={buttonStyle} onClick={toggle}>Back to Login</button>
    </div>
  );
}

function LoginForm({ toggle }) {
  const { users, setMessage } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setMessage(username);
      localStorage.setItem("user", username);
      navigate("/");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <input style={inputStyle} placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />
      <input style={inputStyle} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button style={buttonStyle} onClick={handleLogin}>Login</button>
      <button style={buttonStyle} onClick={toggle}>Create Account</button>
    </div>
  );
}

export default function Login() {
  const [showRegister, setShowRegister] = useState(false);
  const { message } = useUser();

  const toggle = () => setShowRegister(!showRegister);

  return (
    <div style={{ textAlign: "center" }}>
      {showRegister ? <Register toggle={toggle} /> : <LoginForm toggle={toggle} />}
      <p style={{ color: "green" }}>{message}</p>
    </div>
  );
}