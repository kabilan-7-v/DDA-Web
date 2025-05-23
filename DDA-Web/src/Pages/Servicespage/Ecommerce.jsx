import React from 'react'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import './Ecommerce.css'
import Ecomm from '../../assets/image/e-comm.webp'; 
import ABcomm from '../../assets/image/e-comm.jpg'; 
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import PackEcomm from '../../Pages/Servicespage/PackEcomm.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';



import { Link } from 'react-router-dom';





function Ecommerce() {
  return (
    <>
    <footer></footer>
   

<ChooseUs></ChooseUs>
<PackEcomm></PackEcomm>
<Relatedservices></Relatedservices>
<Footer></Footer>




        
    </>
  )
}

export default Ecommerce