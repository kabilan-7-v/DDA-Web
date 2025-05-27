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
    <footer class="footer">
  <div class="footer-container">
    
    <div class="footer-col logo-col">
      <img src= {Logo} alt="DesignDot Logo" class="footer-logo" />
      
      <p class="tagline">Creating Web Experiences Fit for Royalty</p>
      <p class="email">designdotacademy.com</p>
      <p class="phone">+91 92222 52222</p>
    </div>

    
    <div class="footer-col">
      <h3>Pages</h3>
      <ul>
        <li><a href="/#">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contactus">Contact Us</a></li>
      </ul>
    </div>

    
    <div class="footer-col">
      <h3>Social</h3>
      <ul>
        <li><a href=' https://www.linkedin.com/company/designdotacademy/'>Instagram</a></li>
        <li><a href='https://www.linkedin.com/company/designdotacademy/'> LinkedIn</a></li>
      </ul>
    </div>

    
    <div class="footer-col">
      <h3>Services</h3>
      <ul>
      <Link to="/webdevelopment" style={linkStyle}>
  <li>Web Development</li>
</Link>

<Link to="/branding-price" style={linkStyle}>
  <li>Branding</li>
</Link>

<Link to="/app-price" style={linkStyle}>
  <li>Mobile App Development</li>
</Link>

<Link to="/graphic" style={linkStyle}>
  <li>Graphic Design</li>
</Link>



      </ul>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer