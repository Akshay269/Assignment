import React, { useState } from "react";
import "../styles/signup.css";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../controllers/user";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      password: password,
  };
  console.log(obj);
  console.log("hi");
  signup(obj).then((data) => {
      alert(data.message);
      console.log(data);
  });
  navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
          <button type="submit">Sign up</button>
        </form>
      </div>
      <Link to="/login">Already have an account? Login here</Link>
    </>
  );
}

export default Signup;
