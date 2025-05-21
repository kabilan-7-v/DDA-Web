import React from 'react'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import Abt from '../../Pages/Hompage/Abt'
import arrow from '../../assets/image/arrow-right.png'; 

import './Homepage.css';
import Serv from './Serv';
import Work from './Work'
import ChooseUs from './ChooseUs'
import Footer from './Footer'
import CategoryForm from '../../Component/Navbarcomponent.jsx/CategoryForm';

function Homepage() {
  return (
    <>
        <Navbar></Navbar>

        <div className='banner'>
          <div className='black-banner'></div>
          <div className='banner-content'>
          <p className="p1">About Our Company</p>
        <h1>
          Make Your Business  <span>Unmissable Online</span>
        </h1>
        <p className="p2">
          We turn clicks into customers with expert design and marketing..
        </p>
        <button className="banner-b1">
          Free Consultation <img src={arrow} alt="Description" /> 
          </button>
          <button className="banner-b2">
          View Portfolio <img src={arrow} alt="Description" /> 
        </button>

          </div>

        </div>
        
      <Abt></Abt>
      <Serv></Serv>

      <Work></Work>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
      
      
    </>
  )
}

export default Homepage