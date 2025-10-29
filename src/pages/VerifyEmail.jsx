import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying your email...");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // ✅ Call your backend verification route
        const response = await axios.get(
          `http://localhost:5900/api/users/verify/${token}`
        );

        if (response.data.success) {
          setStatus("success");
          setMessage("✅ Email verified successfully! Redirecting to login...");
          setTimeout(() => navigate("/login"), 3000);
        } else {
          setStatus("error");
          setMessage("❌ Verification failed. Link may have expired.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
        setMessage("❌ Invalid or expired verification link.");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {status === "loading" && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-700">{message}</p>
          </>
        )}
        {status === "success" && (
          <>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              Email Verified 🎉
            </h2>
            <p>{message}</p>
          </>
        )}
        {status === "error" && (
          <>
            <h2 className="text-2xl font-semibold text-red-600 mb-3">
              Verification Failed
            </h2>
            <p>{message}</p>
             <button
      onClick={async () => {
        try {
          const email = prompt("Enter your email to resend verification link:");
          if (!email) return;
          const res = await axios.post("http://localhost:5900/api/users/resend-verification", { email });
          alert(res.data.message);
        } catch (err) {
          alert(err.response?.data?.message || "Error resending email.");
        }
      }}
      className="mt-4 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
    >
      Resend Verification Email
    </button>
  </>
)}
      </div>
    </div>
  );
};

   


export default VerifyEmail;
