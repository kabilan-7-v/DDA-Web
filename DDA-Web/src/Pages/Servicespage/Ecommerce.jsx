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
    {/* <Navbar></Navbar>
    {/* <div className="banner-ec">
    
              <img src={Ecomm} />
              <div className='black-banner-ec'></div>
            
              
              <div className="banner-ec-content">
              
              <h1>
              E-Commerce
              </h1>
              
              <button className="banner-ec-b1"> <Link to="/" >Home</Link> / <Link to="/services" >Services</Link> / <Link to="/webdevelopment" >Web Development</Link> / E-Commerce</button>
            </div>
          </div> */}
        {/* <div className='ab-ec'>
          <div className="about-ec p-0">
        <div className="container about-ec-image p-0">
          <div className="image-ec">
            <img src={ABcomm} />
           
          </div>
          <div className="about-ec-content">
            <div className="para-ec">
              <p className="about-ec-p1">E-Commerce</p>
              <h1 className="about-ec-h1">
                E-commerce that grows your brand
              </h1>
              <p className="about-ec-content-p1">
               
                An e-commerce website is an online platform that allows individuals or businesses to buy and sell products or services. It has revolutionized retail by enabling internet-based transactions, offering convenience and global reach. E-commerce models include B2B, B2C, C2C, and C2B.<br/><br/>

                  Key features include user login, product listings, shopping cart, payment gateway integration, order tracking, and search options. These sites use technologies like HTML, CSS, JavaScript (with frameworks like React or Angular), and backend tools like Node.js or PHP, along with databases such as MySQL or MongoDB. Payments are handled through APIs like Stripe or PayPal.<br/><br/>
                  
                  E-commerce websites offer benefits like 24/7 access, lower costs, and wider reach. However, they also face challenges such as data security, logistics management, and building customer trust in a competitive environment.
              </p>
              <button className="about-ec-b1">
                Free-consultation<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

<ChooseUs></ChooseUs>
<PackEcomm></PackEcomm>
<Relatedservices></Relatedservices>
<Footer></Footer> */}




        
    </>
  )
}

export default Ecommerce