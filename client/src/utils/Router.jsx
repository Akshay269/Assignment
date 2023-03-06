import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
