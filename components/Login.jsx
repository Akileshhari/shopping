import React, { useState } from "react";
import { X } from "lucide-react";
import Otp from "./Otp";

const Login = ({ setModalOpen }) => {
  const [email, setEmail] = useState(""); 
  const [showOtpPage, setShowOtpPage] = useState(false); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Email validation
    if (!email) {
      setError("Email is required");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate OTP sending (Replace this with API call)
    setTimeout(() => {
      setLoading(false);
      setShowOtpPage(true); // Navigate to OTP page
    }, 1500);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {showOtpPage ? (
          <Otp email={email} setModalOpen={setModalOpen} />
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-m font-semibold text-[#7557A3]">
                Enter your email to <br /> Signup or Login
              </h2>
              <button onClick={handleClose} className="text-gray-700 hover:text-gray-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-[#7557A3] focus:outline-none placeholder-[#7557A3]"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              <button
                type="submit"
                className="w-full mt-4 py-2 bg-[#7557A3] text-white rounded-lg hover:bg-[#644a8c]"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
