import React, { useEffect } from 'react';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar';
import Abt from '../../Pages/Hompage/Abt';
import arrow from '../../assets/image/arrow-right.png';

import './Homepage.css';
import Serv from './Serv';
import Work from './Work';
import ChooseUs from './ChooseUs';
import Footer from './Footer';
import CategoryForm from '../../Component/Navbarcomponent.jsx/CategoryForm';

import { useDispatch, useSelector } from 'react-redux';
import { showPopup } from '../features/popupSlice'; // ✅ update import path accordingly

function Homepage() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.popup.visible);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(showPopup());
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      <div className={`main-content ${isVisible ? 'blurred' : ''}`}>
        <Navbar />

        <div className='banner'>
          <div className='black-banner'></div>
          <div className='banner-content'>
            <p className="p1">About Our Company</p>
            <h1>
              Make Your Business <span>Unmissable Online</span>
            </h1>
            <p className="p2">
              We turn clicks into customers with expert design and marketing..
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
    </>
  );
}

export default Homepage;
