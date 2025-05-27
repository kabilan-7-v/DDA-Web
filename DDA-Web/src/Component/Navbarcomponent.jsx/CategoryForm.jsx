import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { hidePopup } from '../../Pages/features/popupSlice';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
const serviceOptions = {
  "Web Development": [
    "E-commerce Website",
    "Business Website",
    "Portfolio Website",
    "Personal Blog",
    "Educational Platform",
    "Event Landing Page",
  ],
  "Game Development": [
    "2D Mobile Game",
    "3D PC Game",
    "Multiplayer Online Game",
    "Casual Puzzle Game",
    "AR/VR Game",
  ],
  "Digital Marketing": [
    "SEO Optimization",
    "Social Media Marketing",
    "Email Campaigns",
    "Content Marketing",
    "Google Ads Setup",
  ],
  "Mobile App Development": [
    "E-commerce App",
    "Chat App",
    "Booking App",
    "Fitness Tracker App",
    "Educational App",
  ],
  "Networking Service": [
    "LAN Setup",
    "Wi-Fi Installation",
    "Server Configuration",
    "Firewall & Security",
    "VPN Setup",
  ],
  "Graphics Design": [
    "Logo Design",
    "UI/UX Design",
    "Business Card Design",
    "Banner & Poster Design",
    "Social Media Post Design",
  ],
};

const packages = ["Basic", "Standard", "Premium"];
const packageCosts = {
  Basic: 1,
  Standard: 2,
  Premium: 3,
};
const loadRazorpay = () =>
  new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });


const CategoryForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [isemailVerifiedclick, setIsEmailVerified] = useState(false);
  const [otptext,setOtptext] = useState("");



  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
  const verifyotp = () => {
    console.log(otptext,otp);
    if (parseInt(otptext) === otp) {
      setEmailVerified(true);
      toast.success("OTP Verified")
    }
    else{
      alert("Invalid OTP")
      
    }
  }
const handlePayment = async (amount) => {
  const res = await loadRazorpay();
  if (!res) {
    alert('Razorpay SDK failed to load');
    return;
  }

  const { data: order } = await axios.post('http://localhost:5000/api/payment/create-order', {
    amount: amount,
  });
 
  const options = {
    key: 'rzp_live_amqPFi6ouaxEqd', // Replace with Razorpay key
    amount: order.amount,
    currency: order.currency,
    name: 'DesignDot Acadamey',
    description: 'Test Transaction',
    order_id: order.id,
    handler: async function (response) {
      const verifyRes = await axios.post('http://localhost:5000/api/payment/verify', {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });

      if (verifyRes.data.success) {
       await axios.post('http://localhost:5000/api/purchases', {
          "name":name.toString(),
          "email": email.toString(),
          "emailStatus": emailVerified.toString(),
          "phone": phone.toString(),
          "service":mainCategory.toString()+"#*#"+subCategory.toString(),
          "package": order.amount.toString(),
          "paymentStatus": "Paid"
        }, {
          headers: {
            'Content-Type': 'application/json', 
          }
        });
        
        toast.success('Payment successful');
        dispatch(hidePopup())
      } else {
      
       
        toast.error('Payment verification failed');
        dispatch(hidePopup())
      }
    },
    prefill: {
      name: 'Kabilan V',
      email: 'kabilan@example.com',
      contact: '9999999999',
    },
    theme: {
      color: '#F37254',
    },
  };

  const rzp = new window.Razorpay(options);

  rzp.open();
};
  const sendVerificationEmail = async () => {
    if (!email) {
      toast.error("Please enter an email address first.");
      return;
    }
    
    const newOtp = generateOtp();
    setOtp(newOtp);
    await axios.post('http://localhost:5000/api/mail/send', 
      {
        "to": email,
        "subject": "Design Dot Acadamecy ",
        "message": ` This is a otp to verify ${newOtp}`
      }
      
      
    );
    setIsEmailVerified(true);

    toast.info(`Verification email sent to ${email}`);
  };

  const handlePurchase = async() => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }
    if (!emailVerified) {
      toast.error("Please verify your email before purchasing.");
      return;
    }
    if (!mainCategory || !subCategory || !selectedPackage) {
      toast.error("Please select category, service, and package before purchasing.");
      return;
    }
    
    if (selectedPackage==="Premium"){
      handlePayment(3)
      
    }
    else if (selectedPackage==="Basic"){
      handlePayment(1)

    }
    else{
      handlePayment(2)

    }
  
    console.log(selectedPackage)
  };

  return (
    <>
      <div
        style={{
          maxWidth: 1300,
          margin: "2rem auto",
          marginTop:80,
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          gap: 40,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#333",
          position: "relative",

          
        }}
      >   <button
      onClick={() => dispatch(hidePopup())}
      style={{
        position: "absolute",
        top: 10,
        right: 20,
        border: "none",
        background: "transparent",
        fontSize: 34,
        cursor: "pointer",
        color: "#999",
      }}
      aria-label="Close form"
      title="Close form"
    >
      &times;
    </button>
        {/* Left Side: User Info */}
        <div style={{ flex: "1 1 300px", minWidth: 280 }}>
          <h2 style={{ marginBottom: "1.5rem", color: "#007bff" }}>👤 Your Details</h2>

          <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: 16,
              borderRadius: 6,
              border: "1.5px solid #ccc",
              marginBottom: 20,
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />

          <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
            Email
          </label>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailVerified(false);
              }}
              style={{
                flex: 1,
                padding: "10px 14px",
                fontSize: 16,
                borderRadius: 6,
                border: "1.5px solid #ccc",
                transition: "border-color 0.3s",
                
              }}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
            <button
              onClick={sendVerificationEmail}
              disabled={!email || emailVerified}
              style={{
                padding: "10px 16px",
                backgroundColor: emailVerified ? "#28a745" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: email && !emailVerified ? "pointer" : "not-allowed",
                fontWeight: "600",
                boxShadow: "0 2px 6px rgba(0,123,255,0.3)",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!emailVerified && email) e.target.style.backgroundColor = "#0056b3";
              }}
              onMouseLeave={(e) => {
                if (!emailVerified && email) e.target.style.backgroundColor = "#007bff";
              }}
            >
              {!emailVerified ? "Sent OTP " : "Email verified"}
            </button>
          </div>
         { isemailVerifiedclick===true?   ( <div> <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
            OTP
          </label>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
            <input
              type="text"
              placeholder="Enter your Otp"
              value={otptext}
              onChange={(e) => {
                setOtptext(e.target.value);
              }}
              style={{
                flex: 1,
                padding: "10px 14px",
                fontSize: 16,
                borderRadius: 6,
                border: "1.5px solid #ccc",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
            <button
              onClick={verifyotp}
              disabled={!email || emailVerified}
              style={{
                padding: "10px 16px",
                backgroundColor: emailVerified ? "#28a745" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: email && !emailVerified ? "pointer" : "not-allowed",
                fontWeight: "600",
                boxShadow: "0 2px 6px rgba(0,123,255,0.3)",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!emailVerified && email) e.target.style.backgroundColor = "#0056b3";
              }}
              onMouseLeave={(e) => {
                if (!emailVerified && email) e.target.style.backgroundColor = "#007bff";
              }}
            >
              {!emailVerified ? "verify Otp" : "Verifed"}
            </button>
            </div>      </div>):<div></div>}
          <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: 16,
              borderRadius: 6,
              border: "1.5px solid #ccc",
              marginBottom: 20,
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>

        {/* Right Side: Service Selection */}
        <div style={{ flex: "1 1 400px", minWidth: 320,  marginLeft:40}}>

          <label style={{ display: "block", marginBottom: 6, fontWeight: 600,marginTop:50 }}>
            📂 Select Service Category
          </label>
          <select
            value={mainCategory}
            onChange={(e) => {
              setMainCategory(e.target.value);
              setSubCategory("");
            }}
            style={{
              width: "100%",
              padding: "14px 14px",
              fontSize: 16,
              borderRadius: 6,
              border: "1.5px solid #ccc",
              marginBottom: 20,
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          >
            <option value="">-- Choose a service --</option>
            {Object.keys(serviceOptions).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
            📁 Select Specific Service
          </label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            disabled={!mainCategory}
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: 16,
              borderRadius: 6,
              border: "1.5px solid #ccc",
              marginBottom: 20,
              backgroundColor: mainCategory ? "white" : "#eee",
              cursor: mainCategory ? "pointer" : "not-allowed",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => {
              if (mainCategory) e.target.style.borderColor = "#007bff";
            }}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          >
            <option value="">-- Choose a service --</option>
            {mainCategory &&
              serviceOptions[mainCategory].map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
          </select>

          <label style={{ display: "block", marginBottom: 6, fontWeight: 600 }}>
            💰 Select Package
          </label>
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: 16,
              borderRadius: 6,
              border: "1.5px solid #ccc",
              marginBottom: 20,
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          >
            <option value="">-- Choose a package --</option>
            {packages.map((pack) => (
              <option key={pack} value={pack}>
                {pack} (₹{packageCosts[pack]})
              </option>
            ))}
          </select>

          <button
            onClick={handlePurchase}
            disabled={
              !name ||
              !email ||
              !phone ||
              !emailVerified ||
              !mainCategory ||
              !subCategory ||
              !selectedPackage
            }
            style={{
              marginTop:10,
              width: "100%",
              padding: "14px 0",
              fontSize: 18,
              fontWeight: 600,
              color: "white",
              backgroundColor:
                name &&
                email &&
                phone &&
                emailVerified &&
                mainCategory &&
                subCategory &&
                selectedPackage
                  ? "#007bff"
                  : "#999",
              border: "none",
              borderRadius: 8,
              cursor:
                name &&
                email &&
                phone &&
                emailVerified &&
                mainCategory &&
                subCategory &&
                selectedPackage
                  ? "pointer"
                  : "not-allowed",
              boxShadow:
                name &&
                email &&
                phone &&
                emailVerified &&
                mainCategory &&
                subCategory &&
                selectedPackage
                  ? "0 4px 15px rgba(0,123,255,0.4)"
                  : "none",
              transition: "background-color 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              if (
                name &&
                email &&
                phone &&
                emailVerified &&
                mainCategory &&
                subCategory &&
                selectedPackage
              )
                e.target.style.backgroundColor = "#0056b3";
            }}
            onMouseLeave={(e) => {
              if (
                name &&
                email &&
                phone &&
                emailVerified &&
                mainCategory &&
                subCategory &&
                selectedPackage
              )
                e.target.style.backgroundColor = "#007bff";
            }}
          >
            Purchase Now
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3500} />
    </>
  );
};

export default CategoryForm;
