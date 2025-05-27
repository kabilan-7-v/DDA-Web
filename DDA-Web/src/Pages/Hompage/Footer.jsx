import React from 'react'
import './Footer.css'
import Logo from '../../assets/image/logo.png'; 

function Footer() {
  return (
    <>
    <footer class="footer">
  <div class="footer-container">
    
    <div class="footer-col logo-col">
      <img src= {Logo} alt="DesignDot Logo" class="footer-logo" />
      
      <p class="tagline">Creating Web Experiences Fit for Royalty</p>
      <p class="email">info@designdotacademy.com</p>
      <p class="phone">+91 74115 71410</p>
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
        <li><a href="https://www.instagram.com/designdot_academy/profilecard/?igsh=MXRoOXhyOHhxdDdwZQ==">Instagram</a></li>
        
        <li><a href="https://www.linkedin.com/company/designdotacademy/">LinkedIn</a></li>
      </ul>
    </div>

    
    <div class="footer-col">
      <h3>Services</h3>
      <ul>
        <li><a href="/webdevelopment">Web Development</a></li>
        <li><a href="/app-price">App Development</a></li>
        <li><a href="/graphic">Graphic Design </a></li>
        <li><a href="/uxui-price">UIUX Design</a></li>
        <li><a href="/branding-price">Branding Design</a></li>
      </ul>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer