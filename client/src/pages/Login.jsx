import React, { useState } from "react";
import "../styles/login.css";
import Navbar from "../components/Navbar";

function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
