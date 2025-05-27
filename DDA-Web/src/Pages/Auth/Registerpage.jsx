// Register.jsx
import React, { useState } from "react";
import "../Auth/Registerpage.css";
import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom";
const Register = () => {
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate sending OTP
    setShowOtpField(true);
    alert("OTP sent to your email!");
  };

  const handleVerifyOtp = () => {
    // Simulate OTP check
    if (otp === "123456") {
      alert("Email verified successfully!");
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="containerregister">
    {/* Left Panel */}
    <div className="left-panel">
  
      <h2>Register</h2>
      <p>How to get started? Lorem ipsum dolor at?</p>

      <div className="input-box">
        <span>👤</span>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-box">
        <span>✉️</span>
        <input type="text" placeholder="Email" />
      </div><div className="input-box">
        <span>📞</span>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="input-box">
        <span>🔒</span>
        <input type="password" placeholder="Password" />
      </div>

      <button className="login-btn">Register Now</button>
    
      <h4 className="alreadyregister">Already Register - <Link to={"/login"}><span className="clicklogin">click to Login</span></Link> </h4>

      <div className="divider"></div>
      <p style={{ textAlign: "center", marginBottom: "10px" }}>
        Login with Others
      </p>

      <div className="social-btn">
        <img src="https://img.icons8.com/color/48/google-logo.png" alt="google" />
        Login with Google
      </div>

      
    </div>

    {/* Right Panel */}
    <div className="right-panel">
       
      
      <img
        src="https://img.freepik.com/free-photo/smiling-businesswoman-using-digital-tablet_329181-12786.jpg"
        alt="woman"
        
      /><div className="quote-box">
      <p>Very good works are waiting for you. Login Now!!!</p>
    </div>
    </div>
  </div>
  );
};

export default Register;
