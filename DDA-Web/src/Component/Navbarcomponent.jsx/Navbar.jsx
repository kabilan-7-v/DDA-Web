import React, { useState ,useEffect} from 'react';
import './Navbar.css';
import logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import LoggedInUser from './Loggedinicon';
import LogoutButton from '../LoggedOut';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);
  const [islogin,setIslogin] =  useState(false);
  useEffect(()=>{
    const login = localStorage.getItem("userData");
    if (login){
      setIslogin(true);
    }
    else{
      setIslogin(false);
    }

  },[])


  return (
    <div className="container-fluid topbar p-0 ">
      <div className='top'>
        <div className="container topbar-content">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>

          <div
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/aboutus" onClick={closeMenu}>About us</Link></li>
              <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
              <li><Link to="/contactus" onClick={closeMenu}>Contact Us</Link></li>

              <div className='orders'>
           <a href='/My-orders'>    <button>My Orders</button></a> 

              </div>
              
           {islogin?(<LogoutButton></LogoutButton>):
           ( <div className='sign-in'>
          <a href='/signIn'> <button>Sign Up</button></a>
            
            </div>)}
             
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
