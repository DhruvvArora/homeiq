import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckoutPage";
import ReviewsPage from "./pages/ReviewsPage";
import Trending from "./pages/TrendingPage";
import InventoryPage from './pages/InventoryPage';
import SalesPage from './pages/SalesPage';
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/ProductList"; 
import CustomerService from "./pages/CustomerService";
import Features from "./pages/Features";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        {isAuthenticated}
        <div style={{ marginLeft: "150px", flexGrow: 1 }}>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CheckoutPage />} />
            <Route path="/review" element={<ReviewsPage />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/inventoryPage" element={<InventoryPage />} />
            <Route path="/salesPage" element={<SalesPage />} />
            <Route path="/customerService" element={<CustomerService />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
