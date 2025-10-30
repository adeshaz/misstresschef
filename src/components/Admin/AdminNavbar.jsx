import React from "react";
import "./AdminNavbar.css";
import { useNavigate } from "react-router-dom";


const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success px-3">
      <a className="navbar-brand text-white fw-bold" href="/admin/orders">
        <img src={"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801883/leaf_aq6y0m.png"} className='leaf-img-top' alt="leaf-icon" /> Skincare Admin
      </a>
      <div className="ms-auto">
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
