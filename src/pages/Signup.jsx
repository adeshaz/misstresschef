import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/signup", form);

      if (res.data.success && res.data.token) {
        // ✅ Save token so user is logged in immediately
        localStorage.setItem("token", res.data.token);
        setMessage("🎉 Signup successful! Redirecting to profile...");
        setTimeout(() => navigate("/profile"), 2000);
      } else {
        setMessage(res.data.message || "❌ Signup failed");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Create Account</h3>

        {message && (
          <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              name="firstName"
              className="form-control"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <div className="mt-3 text-center">
          <small>
            Already have an account? <a href="/login">Log in</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
