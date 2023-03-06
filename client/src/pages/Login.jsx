import React, { useState } from "react";
import "../styles/login.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { login } from "../controllers/user";

function Login() {
 
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
          let obj = {
            email: email,
            password: password,
          };
          login(obj).then((data) => {
            if (data.tag === true) {
              localStorage.setItem("token", data.token);
              navigate("/dashboard");
            } else {
              alert("Invalid login");
            }
            window.location.reload();
          });
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
