import React from "react";
import Navbar from "../components/Navbar";
import {
  FaMicrosoft,
  FaApple,
  FaAmazon,
  FaSpotify,
  FaGoogle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="title-container">
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
    </>
  );
}
