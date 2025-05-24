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
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Whatsapp</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>

    
    <div class="footer-col">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Digital Marketing</a></li>
        <li><a href="#">Game Development</a></li>
        <li><a href="#">Mobile App Development</a></li>
      </ul>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer