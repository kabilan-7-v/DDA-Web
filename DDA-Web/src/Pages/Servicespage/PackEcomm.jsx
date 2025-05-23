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
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 12,999</h1></div>
             
              <div className="pack-info">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Up to 5 Static page</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Responsive Design</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Contact Form</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Basic SEO</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 7 Days</p>
              </div>
              <hr/>
              <div className="pack-button">
                <button onClick={handleChoose}>Choose Basic</button>
              </div>
            </div>
            <div className="package2">
              <div className="package2-top"><h3>Standard Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 29,999</h1></div>
              
              <div className="pack-info2">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Up to 10 Static page</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Dynamic CMS (WordPress/Custom)</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Blog Integration</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Basic On-Page SEO</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> WhatsApp/Email Integration</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 12–15 Days</p>
              </div>
               <hr />
              <div className="pack2-button">
                <button onClick={handleChoose}>Choose Standard</button>
              </div>
            </div><div className="package1">
              <div className="package1-top"><h3>Premium Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 59,999</h1></div>
              
              <div className="pack-info">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Unlimited Pages</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Custom Design & CMS</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> E-Commerce/Payment Gateway</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Advanced SEO & Analytics</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Live Chat, Security Setup</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 20–25 Days</p>
              </div>
              <hr/>
              <div className="pack-button">
                <button onClick={handleChoose}>Choose Premium</button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
    </>
  );
}

export default PackEcomm;
