import express from "express"; // Import express
import cors from "cors"; // Import CORS for frontend requests
import bodyParser from "body-parser"; // Import body-parser

const app = express(); // Initialize express app
const PORT = 5000; // Define the port

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Enable JSON body parsing

// Store OTPs in memory (Temporary storage)
const otpStorage = {};

// Endpoint to send OTP
app.post("/send-otp", (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

  otpStorage[email] = otp; // Save OTP (Use DB for real implementation)
  console.log(`OTP for ${email}: ${otp}`); // Debugging

  res.json({ success: true, message: "OTP sent successfully!" });
});

// Endpoint to verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStorage[email] && otpStorage[email] === parseInt(otp)) {
    res.json({ success: true, message: "OTP Verified" });
  } else {
    res.json({ success: false, message: "Invalid OTP" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
