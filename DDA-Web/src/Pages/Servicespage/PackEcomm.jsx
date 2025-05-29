import React, { useState } from 'react';
import './PackEcomm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { handlePayment } from "../../utils/razorpayUtils";

function PackEcomm() {
  const startPayment = async (amountInRupees) => {
    const userData = localStorage.getItem("userData");
  
    if (!userData) {
      toast.error("Sign in to Continue");

      return;
    }
  
    const user = JSON.parse(userData);
  toast.success("Please wait payment initialized")
    await handlePayment({

      amount: amountInRupees , // Convert to paise
      userDetails: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      categoryDetails: {
        mainCategory: "Web Development",
        subCategory: "Ecommerce",
      },
      onSuccess: () => {
        toast.success("Payment completed successfully");
      },
      onFailure: () => {
        toast.error("Payment failed");
      },
    });
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
                <button  onClick={() => startPayment(1)}>Choose Basic</button>
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
                <button  onClick={() => startPayment(1)}>Choose Standard</button>
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
                <button  onClick={() => startPayment(1)}>Choose Premium</button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
    </>
  );
}

export default PackEcomm;
