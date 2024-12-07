import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import "../styles/transitions.css";

const AppRouter = () => {
  const location = useLocation();

  return ( 
    <Routes location={location}>
      <Route path="/" element={<Home />} />
    </Routes> 
  );
};

export default AppRouter;
