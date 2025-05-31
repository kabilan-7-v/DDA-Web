import React from 'react'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import './Servicespage.css'
import banner from '../../assets/image/Temp-banner.jpg'; 
import { Link } from 'react-router-dom';
import Serv from '../../Pages/Hompage/Serv.jsx';
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';
import { useSelector } from 'react-redux';
import { faL } from '@fortawesome/free-solid-svg-icons';
import CategoryForm from '../../Component/Navbarcomponent.jsx/CategoryForm.jsx';





function Sevicespage() {
  const isVisible = useSelector((state) => state.popup.visible1);
  return (
    <>
    <div className={`main-content ${isVisible ? 'blurred' : ''}`}>
    <Navbar></Navbar>

    {/* <div className="banner-ss">
    
              <img src={banner} />
              <div className='black-banner-ss'></div>
            
              
              <div className="banner-ss-content">
              
              <h1>
               Services
              </h1>
              
              <button className="banner-ss-b1"> <Link to="/" >Home</Link> / Services</button>
            </div>
          </div> */}

          <Serv ishomepage={false}></Serv>
          <ChooseUs></ChooseUs>
          <Footer></Footer>

          </div>
          {isVisible && (
        <div className="popup-overlay">
          <CategoryForm ishomepage={false}></CategoryForm>
        </div>)}
    </>
  )
}

export default Sevicespage