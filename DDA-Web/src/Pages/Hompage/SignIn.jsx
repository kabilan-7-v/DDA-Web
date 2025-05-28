import React from "react";
import "./SignIn.css";
import Navbar from "../../Component/Navbarcomponent.jsx/Navbar";
import reg from "../../assets/image/reg-back.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [otptext,setOtptext] = useState("");
  const [isemailVerifiedclick, setIsEmailVerified] = useState(false);
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  const verifyotp = () => {
    var otp  = otp1+otp2+otp3+otp4+otp5+otp6;
    if (otptext === otp) {
      setEmailVerified(true);
      toast.success("OTP Verified")
    }
    else{
      alert("Invalid OTP")
      
    }
  } 
   const sendVerificationEmail = async () => {
    if (!email) {
      toast.error("Please enter an email address first.");
      return;
    }
    
    const newOtp = generateOtp();
    setOtptext(newOtp);
    await axios.post('https://dda-backend-xskh.onrender.com/api/mail/send', 
      {
        "to": email,
        "subject": "Design Dot Acadamecy ",
        "message": ` This is a otp to verify ${newOtp}`
      }
      
      
    );
    setIsEmailVerified(true);

    toast.info(`Verification email sent to ${email}`);
  };



  const userregister = async () => {
    if (!name || !email || !phone || !password) {
      toast.info("Please Fill all the details");
    } else {
      await axios.post("http://localhost:5000/api/users/register", {
        username: name,
        email: email,
        phoneNumber: phone,
        password: password,
      });
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
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group-si">
              <button type="button">Submit & Get OTP</button>
            </div>
            <div className="form-group-p1-si">
              <p>Please enter the code that was sent to your email ID</p>
            </div>
            <div className="otp-box-si">
              <input id="otp1" type="text" maxLength={1} />
              <input id="otp2" type="text" maxLength={1} />
              <input id="otp3" type="text" maxLength={1} />
              <input id="otp4" type="text" maxLength={1} />
              <input id="otp5" type="text" maxLength={1} />
              <input id="otp6" type="text" maxLength={1} />
            </div>
            <div className="form-verify-si">
              <button type="submit">Verify</button>
            </div>
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
