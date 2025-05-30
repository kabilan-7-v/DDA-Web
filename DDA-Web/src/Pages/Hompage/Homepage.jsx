import React, { useEffect } from 'react';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar';
import Abt from '../../Pages/Hompage/Abt';

import './Homepage.css';
import Serv from './Serv';
import Work from './Work';
import ChooseUs from './ChooseUs';
import Footer from './Footer';
import CategoryForm from '../../Component/Navbarcomponent.jsx/CategoryForm';

import { useSelector } from 'react-redux';
 // ✅ update import path accordingly
import MyOrders from './MyOrders';

function Homepage() {
  const isVisible = useSelector((state) => state.popup.visible);
  const userdetails = useSelector((state) => state.popup.usercard);


  // Show popup after 5 seconds

  return (
    <>
    
      <div className={`main-content ${isVisible||userdetails ? 'blurred' : ''}`}>
        <Navbar />

        <div className='banner'>
          <div className='black-banner'></div>
          <div className='banner-content'>
   
            <p className="a-p1">About Our Company</p>
            <h1>
              Make Your Business <span>Unmissable Online</span>
            </h1>
            <p className="p2">
              We turn clicks into customers through expert design, development, and branding.
            </p>
            {/* <button className="banner-b1">
              Free Consultation <img src={arrow} alt="arrow" />
            </button>
            <button className="banner-b2">
              View Portfolio <img src={arrow} alt="arrow" />
            </button> */}
          </div>
        </div>

        <Abt />
        <Serv />
        <Work />
        <ChooseUs />
        <Footer />
      </div>

      {/* Popup Form */}
      {isVisible && (
        <div className="popup-overlay">
          <CategoryForm />
        </div>
      )}
      {userdetails && (
         <div className="popup-overlay">
          <MyOrders/></div>
      )}
    </>
  );
}

export default Homepage;
