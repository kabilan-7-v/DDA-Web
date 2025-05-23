import React, { useState } from 'react';
import './Navbar.css'; // Assuming relative path here
import logo from '../../assets/image/logo.png'; // Update this accordingly
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="container-fluid topbar p-0">
      <div className='top'>
      <div className="container topbar-content">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
          <li><Link to="/" >Home</Link></li>
          <li> <Link to="/aboutus">About us</Link></li>
          <li> <Link to="/services">Services</Link></li>
          <li> <Link to="/contactus">Contact Us</Link></li>
            {/* <li><Link to="/portfolio" > Portfolio</Link></li> */}
          </ul>
        </div>

        <div className="free-consult">
          <button>
            Free consultation <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
