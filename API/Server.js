import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"; // ✅ Import path module
import { fileURLToPath } from "url"; // ✅ Import for ES module support

// Fix for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the correct path
dotenv.config({ path: path.join(__dirname, "../config/Mailconfig.env") });

// Debugging
console.log("Loaded Email User:", process.env.EMAIL_USER);
console.log("Loaded Email Pass:", process.env.EMAIL_PASS ? "LOADED" : "NOT LOADED");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log("Loaded Email User:", process.env.EMAIL_USER);
console.log("Loaded Email Pass:", process.env.EMAIL_PASS ? "LOADED" : "NOT LOADED");


transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server is Ready!");
  }
});

// Store OTPs
const otpStore = {};

// Send OTP API
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  console.log("Email----------------------",email);
  if (!email) return res.status(400).json({ success: false, message: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  otpStore[email] = otp; // Store OTP temporarily
console.log("OTP----------------------",otp);
  try {
    console.log("Sending OTP to:", email); // Debugging log
    console.log("Email User:", "akileshhariec@gmail.com");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Verify OTP API
app.post("/verify-otp", async (req, res) => {
  const { email } = req.body;
  console.log("Received request to send OTP to:", email); // Debugging log

  if (!email) {
    console.log("❌ No email received!"); // Check if email is missing
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log("Generated OTP:", otp); // Debugging log

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
    });

    console.log("✅ OTP Sent Successfully!");
    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("❌ Error sending OTP:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
