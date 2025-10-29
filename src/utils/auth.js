import { useNavigate } from "react-router-dom";

export const isAuthenticated = () => !!localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("token");
  const navigate = useNavigate();
  navigate("/login");
};


