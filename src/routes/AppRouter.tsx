import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile"
import "../styles/transitions.css";

const AppRouter = () => {
  const location = useLocation();

  return ( 
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route
        path="dashboard"
        element={
            <Dashboard />
        }
      />
      <Route
        path="profile"
        element={
            <Profile />
        }
      />
    </Routes> 
  );
};

export default AppRouter;
