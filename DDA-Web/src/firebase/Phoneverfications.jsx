import React, { useState, useEffect } from "react";
import { auth } from "./firebase.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Phoneverifications = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");

  // Setup reCAPTCHA on mount
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier= new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
        }
      
      );

      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  }, []);

  const handleSendOtp = async () => {
    setMessage("");
    if (!phone || phone.length < 10) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier;
      console.log(phone)
      const result = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier);
      console.log(result);
      setConfirmationResult(result);
      setMessage("OTP has been sent.");
    } catch (error) {
      console.error("Error during signInWithPhoneNumber", error);
      setMessage("Failed to send OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setMessage("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setMessage("Phone number verified successfully!");
    } catch (error) {
      console.error("OTP Verification Error", error);
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Phone Verification</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div id="recaptcha-container" style={{ marginBottom: "15px" }} />
      <button style={styles.button} onClick={handleSendOtp}>
        Send OTP
      </button>

      {confirmationResult && (
        <>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button style={styles.button} onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        </>
      )}

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    boxShadow: "0 0 10px #ccc",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  message: {
    marginTop: "10px",
    color: "green",
  },
};

export default Phoneverifications;
