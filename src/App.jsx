import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Payment from "./components/Payment";
import UploadMaterial from "./components/UploadMaterial";
import CheckMaterial from "./components/CheckMaterial";
import About from "./components/about";
import Contact from "./components/contact";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/upload">Upload Material</Link>
        <Link to="/check">Check Material</Link>
        <Link to="/contact">Contact</Link>
         <Link to="/about">About</Link>




      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upload" element={<UploadMaterial />} />
        <Route path="/check" element={<CheckMaterial />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />



      </Routes>
    </Router>
  );
}
export default App;
