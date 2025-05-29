import React from 'react'
import './Footer.css'
import Logo from '../../assets/image/logo.png'; 
import { Link } from 'react-router-dom';
function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "#888",
  };
  
  const liStyle = {
    cursor: "pointer",
  };
  return (
    <>
    <footer className="footer">
  <div className="footer-container">
    
    <div className="footer-col logo-col">
      <img src= {Logo} alt="DesignDot Logo" className="footer-logo" />
      
      <p className="tagline">Creating Web Experiences Fit for Royalty</p>
      <p className="email">info@designdotacademy.com</p>
      <p className="phone">+91 74115 71410</p>
    </div>

    
    <div className="footer-col">
      <h3>Pages</h3>
      <ul>
        <li><a href="/#">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contactus">Contact Us</a></li>
      </ul>
    </div>

    
    <div className="footer-col">
      <h3>Social</h3>
      <ul>
        <li><a href=' https://www.linkedin.com/company/designdotacademy/'>Instagram</a></li>
        <li><a href='https://www.linkedin.com/company/designdotacademy/'> LinkedIn</a></li>
      </ul>
    </div>

    
    <div className="footer-col">
      <h3>Services</h3>
      <ul>
      <Link to="/webdevelopment" style={linkStyle}>
  <li>Web Development</li>
</Link>

<Link to="/app-price" style={linkStyle}>
  <li>App Development</li>
</Link>

<Link to="/graphic" style={linkStyle}>
  <li>Graphic Design</li>
</Link>
<Link to="/uxui-price" style={linkStyle}>
  <li>UI/UX Design</li>
</Link>
<Link to="/branding-price" style={linkStyle}>
  <li>Branding</li>
</Link>



      </ul>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer