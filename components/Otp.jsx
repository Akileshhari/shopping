import React, { useState } from "react";
import { X, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const Otp = ({ email, setModalOpen }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  // Handle OTP Input Changes
  const handleChange = (index, value) => {
    if (isNaN(value)) return; // Prevent non-numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input box automatically
    if (value !== "" && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: enteredOtp }),
      });

      const data = await response.json();

      if (data.success) {
        setIsVerified(true);
        setError(""); // Clear errors
        setTimeout(() => setModalOpen(false), 3000); // Close modal after 3 sec
      } else {
        setError("❌ Incorrect OTP. Please try again."); // Show incorrect OTP error
      }
    } catch (error) {
      setError("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-m font-semibold text-[#7557A3]">
          Enter OTP sent to <br /> {email}
        </h2>
        <button onClick={() => setModalOpen(false)} className="text-gray-700 hover:text-gray-900">
          <X className="w-6 h-6" />
        </button>
      </div>

      {isVerified ? (
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mt-6"
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
          <p className="text-green-500 font-semibold mt-2">✅ OTP Verified Successfully!</p>
        </motion.div>
      ) : (
        <form className="mt-4" onSubmit={handleOtpSubmit}>
          <div className="flex justify-center gap-2">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                className="w-10 h-10 border text-center text-xl rounded-md focus:ring-2 focus:ring-[#7557A3] focus:outline-none"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 flex items-center">
              <XCircle className="w-5 h-5 mr-1" /> {error}
            </p>
          )}

          <button
            type="submit"
            className={`w-full mt-4 py-2 rounded-lg transition ${
              isVerified ? "bg-gray-400 cursor-not-allowed" : "bg-[#7557A3] hover:bg-[#644a8c] text-white"
            }`}
            disabled={isVerified}
          >
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default Otp;

