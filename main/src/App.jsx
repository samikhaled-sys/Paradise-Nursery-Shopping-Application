import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful and healthy plants</p>
        <button onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
