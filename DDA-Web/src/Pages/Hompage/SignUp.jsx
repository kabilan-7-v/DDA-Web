import React, { useState } from 'react';
import './SignUp.css';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar';
import reg from '../../assets/image/reg-back.png'; 
import axios from 'axios';
import { Navigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsloading] = useState(false);
  const [redirect, setRedirect] = useState(false); // <-- NEW

  const verify = () => {
    console.log("hello");
    setIsloading(true);

    axios.post("https://dda-backend-xskh.onrender.com/api/users/login", {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      localStorage.setItem("userData", JSON.stringify({
        name: response.data.user.username,
        email: email,
        phone: response.data.user.phoneNumber,
      }));
      setRedirect(true); // <-- TRIGGER REDIRECT
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsloading(false);
    });
  };

  // ⏩ Handle navigation
  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="info-su">
        <div className="container-su">
          <form className="contact-form-su">
            <h1>Let’s pick up where we <br /> left off</h1>

            <div className="form-group-su">
              <label htmlFor="mobile">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email Id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-textarea-su">
              <label htmlFor="description">Password</label>
              <input
                type="password"
                id="description"
                name="description"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='forget'>
              <p>Forget Password ?</p>
            </div>

            <div className="form-group-su">
              <button type="button" onClick={verify}>
                <span>{loading ? "Loading..." : "Sign In"}</span>
              </button>
            </div>
          </form>

          <div className="image-section-su">
            <img src={reg} alt="registration visual"/>
            <div className="map-details-su">
              <h1>Ready to build the next big <br /> thing? Let’s go!</h1>
              <p>
                Back to building powerful web solutions.
                Sign in to continue creating <br /> something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
