import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api"; // use axios instance (cleaner)

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@shop.com"); // default admin
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ Call backend admin login
      const res = await API.post("/admin/login", { email, password });

      if (res.data.success) {
        // ✅ Save admin token separately
        localStorage.setItem("adminToken", res.data.token);

        navigate("/admin-dashboard"); // go to dashboard
      } else {
        alert("❌ " + res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("❌ Server error");
    }
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4 fw-bold">🔒 Admin Login</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
