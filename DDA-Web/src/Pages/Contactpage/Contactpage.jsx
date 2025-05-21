import React from 'react'
import './Contactpage.css'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import banner from '../../assets/image/Temp-banner.jpg'; 
import { Link } from 'react-router-dom';
import Form from './Form';
import Footer from '../../Pages/Hompage/Footer.jsx';






function Contactpage() {
  return (
    <>
    <Navbar></Navbar>
   {/* <div className="banner-cp">
             <img src={banner} />
           
           <div className=" black-banner-cp"></div>
           <div className="banner-cp-content">
             
             <h1>
              Contact Us
             </h1>
             
             <button className="banner-cp-b1"><Link to="/" >Home</Link> / Contact Us</button>
           </div>
         </div> */}
         <Form></Form>
         <Footer></Footer>
    </>
  )
}

export default Contactpage