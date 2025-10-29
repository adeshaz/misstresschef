// src/pages/ResendVerification.jsx
import React, { useState } from "react";
import axios from "axios";

const ResendVerification = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleResend = async () => {
    if (!email) {
      setMessage("Please enter your registered email address.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      const res = await axios.post("http://localhost:5900/api/users/resend-verification", { email });
      setMessage(res.data.message);
      setStatus("success");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Resend Verification Email</h2>
        <p className="text-gray-600 mb-6">
          Enter your registered email address, and we’ll send you a new verification link.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yourname@email.com"
          className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <button
          onClick={handleResend}
          disabled={status === "loading"}
          className={`w-full py-2 rounded-md text-white font-medium ${
            status === "loading" ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {status === "loading" ? "Sending..." : "Resend Verification Email"}
        </button>

        {message && (
          <p
            className={`mt-4 text-sm ${
              status === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResendVerification;
