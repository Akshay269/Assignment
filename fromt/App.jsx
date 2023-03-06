import React from "react";
import Navbar from "../components/Navbar";
import {
  FaMicrosoft,
  FaApple,
  FaAmazon,
  FaSpotify,
  FaGoogle,
} from "react-icons/fa";
import "../styles/App.css";
import Signup from "./Signup";
import Login from "./Login";
import { useNavigate, Routes, Route } from "react-router-dom";
import Router from "../utils/Router";


function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      
      <Navbar />
      <div className="homepage">
        <div className="title-container">
        hii
          <h1>Learn to Code-for free.</h1>
          <h1>Build projects.</h1>
          <h1>Earn certifications.</h1>

          <p>
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </p>
          <div className="icons-container">
            <FaAmazon className="icon" />
            <FaApple className="icon" />
            <FaMicrosoft className="icon" />
            <FaSpotify className="icon" />
            <FaGoogle className="icon" />
          </div>

          <button onClick={handleClick} className="cta-button">
            Get Started (It's free)
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
