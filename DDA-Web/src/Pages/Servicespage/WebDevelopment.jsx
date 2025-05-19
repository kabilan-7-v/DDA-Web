import React from 'react'
import './WebDevelopment.css'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import arrow from '../../assets/image/arrow-right.png'; 
import { Link } from 'react-router-dom';
import banner from '../../assets/image/Temp-banner.jpg'; 
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';



function WebDevelopment() {
  return (
    <>
    <Navbar></Navbar>
    {/* <div className="banner-wd">
    
              <img src={banner} />
              <div className='black-banner-wd'></div>
            
              
              <div className="banner-wd-content">
              
              <h1>
               Web Development
              </h1>
              
              <button className="banner-wd-b1"> <Link to="/" >Home</Link> / <Link to="/services" >Services</Link> / Web Development</button>
            </div>
          </div> */}

    <div className='ser01'>
      <div className='servs01'>

    <div className='ser01-card'>
      <a href='/ecommerce'>
       <div className='scard01'>
            <div className='scard01-top'>
            <h2>E- <br />Commerce</h2>
            <div class="scard01-btn">
                  <button><img src={arrow} alt="Description" /></button>
                </div>
    
            </div>
            <hr />
    
            <div>
                <p>
                  totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                  architecto beatae
                </p>
              </div>
              <div class="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
            </div>
    
        </div>
        </a>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Business <br /> Website</h2>
            <div class="scard01-btn">
                  <button><img src={arrow} alt="Description" /></button>
                </div>
    
            </div>
            <hr />
    
            <div>
                <p>
                  totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                  architecto beatae
                </p>
              </div>
              <div class="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Portfolio <br /> Website</h2>
            <div class="scard01-btn">
                  <button><img src={arrow} alt="Description" /></button>
                </div>
    
            </div>
            <hr />
    
            <div>
                <p>
                  totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                  architecto beatae
                </p>
              </div>
              <div class="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Personal <br /> Website</h2>
            <div class="scard01-btn">
                  <button><img src={arrow} alt="Description" /></button>
                </div>
    
            </div>
            <hr />
    
            <div>
                <p>
                  totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                  architecto beatae
                </p>
              </div>
              <div class="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Event <br /> Website</h2>
            <div class="scard01-btn">
                  <button><img src={arrow} alt="Description" /></button>
                </div>
    
            </div>
            <hr />
    
            <div>
                <p>
                  totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                  architecto beatae
                </p>
              </div>
              <div class="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Educational <br /> Website</h2>
            <div class="scard01-btn">
                  <button><img src={arrow} alt="Description" /></button>
                </div>
    
            </div>
            <hr />
    
            <div>
                <p>
                  totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                  architecto beatae
                </p>
              </div>
              <div class="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        
        
    
      </div>
      </div>

</div>
          <ChooseUs></ChooseUs>
          <Footer></Footer>
    </>
  )
}

export default WebDevelopment