import React from "react";
import "./SignIn.css";
import Navbar from "../../Component/Navbarcomponent.jsx/Navbar";
import reg from "../../assets/image/reg-back.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [otptext, setOtptext] = useState("");
  const [isemailVerifiedclick, setIsEmailVerified] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [isloading1, setIsloading1] = useState(false);
  const isOtpComplete =
  otp1.length === 1 &&
  otp2.length === 1 &&
  otp3.length === 1 &&
  otp4.length === 1 &&
  otp5.length === 1 &&
  otp6.length === 1;


  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  const verifyotp = () => {
    console.log(otptext, otp);
    setIsloading1(true);
    var otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    if (otptext === otp) {
      console.log("hello");
      userregister();
      setIsloading1(false);
      
    } else {
      toast.error("Invalid OTP");
      setIsloading1(false);

    }
  };
  const sendVerificationEmail = async () => {
    if (!name || !email || !phone || !password) {
      toast.info("Please Fill all the details");
      return;
    }
    setIsloading(true);
    const newOtp = generateOtp();
    setOtptext(newOtp);
    const respose = await axios.post("https://dda-backend-xskh.onrender.com/api/mail/send", {
      to: email,
      subject: "Design Dot Acadamecy ",
      message: ` This is a otp to verify ${newOtp}`,
    });
    setIsEmailVerified(true);
    setIsloading(false);

    toast.info(`Verification email sent to ${email}`);
  };

  const userregister = async () => {
    if (!name || !email || !phone || !password) {
      toast.info("Please Fill all the details");
    } else {
      await axios.post("https://dda-backend-xskh.onrender.com/api/users/register", {
        "username": name,
        "email": email,
        "phoneNumber": phone,
        "password": password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
      localStorage.setItem("userData", JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
      }));
      toast.success("User Registered Successfully");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="info-si">
        <div className="container-si">
          <form className="contact-form-si">
            <h1>
              We’re Excited to Build <br /> With You
            </h1>

            <div className="form-group-si">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group-si">
              <label for="mobile">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email Id"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailVerified(false);
                }}
              />
            </div>
            <div className="form-group-si">
              <label for="number">Enter Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="form-textarea-si">
              <label for="description">Password</label>
              <input
                type="textarea"
                id="description"
                name="description"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group-si">
              <button type="button" onClick={sendVerificationEmail}>
                {isloading ? "Loading..." : "Submit & Get OTP"}
              </button>
            </div>
            <div className="form-group-p1-si">
              <p>Please enter the code that was sent to your email ID</p>
            </div>
            <div className="otp-box-si">
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
                maxLength={1}
                value={otp2}
                onChange={(e) => {
                  setOtp2(e.target.value);
                  if (e.target.value.length === 1) {
                    document.getElementById("otp3").focus();
                  }
                }}
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
            <div className="form-verify-si">
              <button type="button"
                style={{
                  backgroundColor: isOtpComplete? "#003add":"#D2CBFF",
                }}
                onClick={verifyotp}
              >
                {isloading1 ? "Loading..." : "Verify"}
                
              </button>
            </div>
            <h4 style={{
              marginTop:"10px",
              textAlign:"center"
            }}> Already have a account - <Link style={{
              color: "#003add",
                textDecoration: "none",
            }} to={"/signUp"}>signUp</Link></h4>
          </form>

          <div className="image-section-si">
            <img src={reg} />
            <div className="map-details-si">
              <h1>
                Let’s build your next <br /> big thing together
              </h1>
              <p>
                Turn your ideas into powerful web solutions. Sign up and let's
                build <br></br> something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
