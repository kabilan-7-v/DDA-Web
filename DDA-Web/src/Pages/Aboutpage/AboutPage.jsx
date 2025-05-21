import React from 'react'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import banner from '../../assets/image/Temp-banner.jpg'; 
import './Aboutpage.css'
import { Link } from 'react-router-dom';
import Aboutcontent from './Aboutcontent';
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';



function AboutPage() {
  return (
    <>
        <Navbar></Navbar>
        {/* <div className="banner-ab">
          <img src={banner} />
        
        <div className=" black-banner-ab"></div>
        <div className="banner-ab-content">
          
          <h1>
           About Us
          </h1>
          
          <button className="banner-ab-b1"><Link to="/" >Home</Link> / About Us</button>
        </div>
      </div> */}

       <Aboutcontent></Aboutcontent> 
       <ChooseUs></ChooseUs>
       <Footer></Footer>
       
       
    </>
    
  )
}

export default AboutPage