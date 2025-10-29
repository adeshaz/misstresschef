import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import API from "../utils/api";
import { loginSuccess } from "../redux/authSlice";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    


    try {
     const res = await API.post("/users/login", { 
  email: form.email, 
  password: form.password 
});
if (res.data.success) {
localStorage.setItem("userToken", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));
  // localStorage.setItem("userToken", res.data.token);
  dispatch(loginSuccess(res.data.token));
  navigate("/profile");
} else {
  setMessage("❌ " + res.data.message);
}




      // if (res.data.success) {
      //   // ✅ Save user token separately
      //   localStorage.setItem("userToken", res.data.token);

      //   // ✅ Update redux state
      //   dispatch(loginSuccess(res.data.token));

      //   setMessage("🎉 Login successful! Redirecting...");
      //   setTimeout(() => navigate("/profile"), 1500);
      // } else {
      //   setMessage("❌ " + res.data.message);
      // }
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Login failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">🔐 User Login</h3>

        {message && (
          <div
            className={`alert ${
              message.includes("successful") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={form.email}
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
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>

        <div className="mt-3 text-center">
          <small>
            Don’t have an account? <a href="/signup">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
