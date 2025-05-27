import React from 'react'
import "../Auth/Registerpage.css"
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="containerregister">
    {/* Left Panel */}
    <div className="left-panel">
      <h2>LOGIN</h2>
      <p>How to get started? Lorem ipsum dolor at?</p>

      <div className="input-box">
        <span>👤</span>
        <input type="text" placeholder="Username" />
      </div>

      <div className="input-box">
        <span>🔒</span>
        <input type="password" placeholder="Password" />
      </div>

      <button className="login-btn">Login Now</button>

      <h4 className="alreadyregister">Create a Account - <Link to={"/register"}><span className="clicklogin">click to Register</span></Link> </h4>

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
export default LoginPage