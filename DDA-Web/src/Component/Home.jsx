import React from 'react';
import './Home.css';
import logo from './image/logo.png'; // Make sure logo.png is in the same folder

const Home = () => {
  return (
    <>
      <div className="container-fluid topbar p-0">
        <div className="container topbar-content">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>

          <div className="hamburger" id="hamburger">&#9776;</div>

          <div className="menu" id="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="#">Portfolio</a></li>
            </ul>
          </div>

          <div className="free-consult">
            <button>
              Free consultation <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      


    </>
  );
};

export default Home;
