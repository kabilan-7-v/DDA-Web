import React, { useState } from 'react';
import './PackEcomm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";

function PackEcomm() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleChoose = () => {
    setShowPopup(true);
  };

  const handleSendOTP = () => {
    if (email.trim() === '') return alert("Please enter a valid email");
    setOtpSent(true);
    // In a real app, send OTP to email via backend here
    console.log(`OTP sent to ${email}`);
  };

  const handleVerifyOTP = () => {
    if (otp === '1234') { // Dummy OTP
      setIsVerified(true);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <>
      <div className='ecomm-price'>
        <div className="package">
          <div className="container package-head">
            <div className="package-headcontent">
              <p className="package-p1">Your Choice</p>
              <h1 className="package-h1">Select engagement models of your choice</h1>
            </div>
          </div>

          <div className="container package-card">
            {/* Sample package with button */}
            <div className="package1">
              <div className="package1-top"><h3>Basic Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 14,999</h1></div>
              <div><p>Perfect for startups and small businesses</p></div>
              <div className="pack-info">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Static page</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Basic contact form</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Hosting support 1 Month</p>
              </div>
              <div className="pack-button">
                <button onClick={handleChoose}>Choose Basic</button>
              </div>
            </div>
            <div className="package1">
              <div className="package1-top"><h3>Basic Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 14,999</h1></div>
              <div><p>Perfect for startups and small businesses</p></div>
              <div className="pack-info">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Static page</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Basic contact form</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Hosting support 1 Month</p>
              </div>
              <div className="pack-button">
                <button onClick={handleChoose}>Choose Basic</button>
              </div>
            </div><div className="package1">
              <div className="package1-top"><h3>Basic Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 14,999</h1></div>
              <div><p>Perfect for startups and small businesses</p></div>
              <div className="pack-info">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Static page</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Basic contact form</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Hosting support 1 Month</p>
              </div>
              <div className="pack-button">
                <button onClick={handleChoose}>Choose Basic</button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
    </>
  );
}

export default PackEcomm;
