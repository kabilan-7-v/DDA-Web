import React, { useState } from "react";
import "./Form.css";
import Monitor from "../../assets/image/monitor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [otptext, setOtptext] = useState(null);
  const [emailverify, setEmailVerified] = useState(false);
  const isOtpComplete =
    otp1.length === 1 &&
    otp2.length === 1 &&
    otp3.length === 1 &&
    otp4.length === 1 &&
    otp5.length === 1 &&
    otp6.length === 1;

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
  const verifyotp =async () => {
    if (otptext === parseInt(otp1 + otp2 + otp3 + otp4 + otp5 + otp6)) {
      await axios.post("https://dda-backend-xskh.onrender.com/api/contacts",{
        "fullName":name,
        "email":email,
        "phoneNumber":phone,
        "description":desc,
      }, {
        headers: {
          'Content-Type': 'application/json', 
        }
      });
      setEmailVerified(true);

      toast.success("We get you back soon ...");
      
     
    } else {
      alert("Invalid OTP");
    }
  };
  const sendotp = async () => {
    console.log(email);
    if (!email || !name || !phone || !desc) {
      toast.error("All fields are required");
      return;
    }

    const newotp = generateOtp();
    setOtptext(newotp);

    try {
      await axios.post("https://dda-backend-xskh.onrender.com/api/mail/send", {
        to: email,
        subject: "Design Dot Academy",
        message: `This is your OTP: ${newotp}`,
      });

      toast.info(`Verification email sent to ${email}`);
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.");
    }
  };
  return (
    <>
      <div className="info">
        <div className="container-cp">
          <form className="contact-form">
            <h1>
              We Love To Hear
              <br />
              From You
            </h1>

            <div className="form-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="mobile">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email Id"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="number">Enter Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* <div className="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required />
    </div> */}

            <div className="form-textarea">
              <label for="description">Description</label>
              <input
                type="textarea"
                id="description"
                name="description"
                placeholder="Your Comments"
                onChange={(e) => setDesc(e.target.value)}
                required
              />

              {/* <select id="service" name="service" required>
        <option value="">Choose a service</option>
        <option value="web">Web Development</option>
        <option value="app">App Development</option>
        <option value="design">UI/UX Design</option>
      </select> */}
            </div>

            <div className="form-group">
              <button type="button" onClick={sendotp}>
                Submit & Get OTP
              </button>
            </div>
            <div className="form-group-p1">
              <p>Please enter the code that was sent to your email ID</p>
            </div>
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
                onPaste={(e) => {
                  e.preventDefault();
                  const pastedData = e.clipboardData.getData("Text").trim().slice(0, 6);
                  const values = pastedData.split("");
                  if (values.length === 6) {
                    setOtp1(values[0]);
                    setOtp2(values[1]);
                    setOtp3(values[2]);
                    setOtp4(values[3]);
                    setOtp5(values[4]);
                    setOtp6(values[5]);
                
                    // Move focus to the last input
                    const lastInput = document.getElementById("otp6");
                    if (lastInput) lastInput.focus();
                  } else {
                    toast.error("Please paste a 6-digit OTP.");
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
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp2) {
                    document.getElementById("otp1").focus();
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
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp3) {
                    document.getElementById("otp2").focus();
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
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp4) {
                    document.getElementById("otp3").focus();
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
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp5) {
                    document.getElementById("otp4").focus();
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
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp6) {
                    document.getElementById("otp5").focus();
                  }
                }}
              />
            </div>
            <div className="form-verify">
            <button type="button" onClick={verifyotp} disabled={!isOtpComplete}>
              Verify
            </button>
            </div>
          </form>
          <div className="image-section">
            <div className="map-details">
              <h2>Visit Our Office</h2>
              <p>
                "Where creativity meets clarity—let’s build something
                extraordinary together."
              </p>
              <div className="contact-columns">
                <div className="contact-box">
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <br /> DesignDot Academy, Madurai
                  </p>
                </div>
                <div className="contact-box">
                  <p>
                    <FontAwesomeIcon icon={faPhone} />
                    <br />
                    +91 74115 71410
                  </p>
                </div>
                <div className="contact-box">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <br />
                    info@designdotacademy.
                    <br />
                    com
                  </p>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.794486166586!2d78.1364392!3d9.9174096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c50598267a69%3A0x5cf32a819d7d397a!2sDesignDot%20Academy%20Private%20Limited%20Madurai!5e0!3m2!1sen!2sin!4v1748609128345!5m2!1sen!2sin"
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="fast"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
