// Register.jsx
import React, { useState } from "react";
import "../Auth/Registerpage.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
const Register = () => {
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
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
        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignContent:"center",
          alignItems:"center"
        }}>
        <div className="input-box">
          <span>✉️</span>
          <input type="text" placeholder="Email" />
          
        </div>
        <button className="login-btn1" >Verify Email</button>
        
        </div>
        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignContent:"center",
          alignItems:"center"
        }}>
        <div className="otp-box">
              <input
                id="otp1"
                type="text"
                value={otp1}
                onChange={(e) => {
                  setOtp1(e.target.value);
                  if (e.target.value.length === 1) {
                    document.getElementById("otp2").focus();
                  }
                }}
                maxLength={1}
              />
              <input
                id="otp2"
                type="text"
                value={otp2}
                onChange={(e) => {
                  setOtp2(e.target.value);
                  if (e.target.value.length === 1) {
                    document.getElementById("otp3").focus();
                  }
                }}
                maxLength={1}
              />
              <input
                id="otp3"
                type="text"
                value={otp3}
                onChange={(e) => {
                  setOtp3(e.target.value);
                  if (e.target.value.length === 1) {
                    document.getElementById("otp4").focus();
                  }
                }}
                maxLength={1}
              />
              <input
                id="otp4"
                type="text"
                value={otp4}
                onChange={(e) => {
                  setOtp4(e.target.value);
                  if (e.target.value.length === 1) {
                    document.getElementById("otp5").focus();
                  }
                }}
                maxLength={1}
              />
              <input
                id="otp5"
                type="text"
                value={otp5}
                onChange={(e) => {
                  setOtp5(e.target.value);
                  if (e.target.value.length === 1) {
                    document.getElementById("otp6").focus();
                  }
                }}
                maxLength={1}
              />
              <input
                id="otp6"
                type="text"
                value={otp6}
                onChange={(e) => {
                  setOtp6(e.target.value);
                }}
                maxLength={1}
              />
            </div>
            <div>
        <button className="login-btn2" >Verify Email</button>
        
        </div>
            </div>

        <div className="input-box">
          <span>📞</span>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="input-box">
          <span>🔒</span>
          <input type="password" placeholder="Password" />
        </div>

        <button className="login-btn">Register Now</button>

        <h4 className="alreadyregister">
          Already Register -{" "}
          <Link to={"/login"}>
            <span className="clicklogin">click to Login</span>
          </Link>{" "}
        </h4>

        <div className="divider"></div>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Login with Others
        </p>

        <div className="social-btn">
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google"
          />
          Login with Google
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <img
          src="https://img.freepik.com/free-photo/smiling-businesswoman-using-digital-tablet_329181-12786.jpg"
          alt="woman"
        />
        <div className="quote-box">
          <p>Very good works are waiting for you. Login Now!!!</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
