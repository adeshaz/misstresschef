import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";


const ProtectedRoute = ({ children }) => {
  const isLoggedIn = isAuthenticated();
  return isLoggedIn ? children : <Navigate to="/login" />;

};


export default ProtectedRoute;
