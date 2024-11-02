import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import DashboardPage from "./pages/Dashboardpage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderTracking from "./components/OrderTracking";
import OrderForm from "./components/OrderForm";

const Routesection = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-order"
          element={
            <ProtectedRoute>
              <OrderForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/track-order"
          element={
            <ProtectedRoute>
              <OrderTracking />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routesection;
