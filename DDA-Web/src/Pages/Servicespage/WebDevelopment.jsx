import React from 'react'
import './WebDevelopment.css'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import arrow from '../../assets/image/arrow-right.png'; 
import { Link } from 'react-router-dom';
import banner from '../../assets/image/Temp-banner.jpg'; 
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';
import PackEcomm from '../../Pages/Servicespage/PackEcomm.jsx';
import web from '../../assets/image/web.jpg';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';



function WebDevelopment() {

const serviceData = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites that drive performance and visibility.',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg',
    link: '/webdevelopment'
  },
  {
    title: 'App Development',
    description: 'Smart, user-friendly mobile applications for Android and iOS platforms.',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg',
    link: '/app-price'
  },
  {
    title: 'Graphic Design',
    description: 'Compelling visuals and marketing materials that reflect your brand identity.',
    image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-3.jpg',
    link: '/graphic'
  }
];
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

    {/* <div className='ser01'>
      <div className='servs01'>

    <div className='ser01-card'>
     
       <div className='scard01'>
            <div className='scard01-top'>
            <h2>E- <br />Commerce</h2>
            <div className="scard01-btn">
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
              <div className="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
            </div>
    
        </div>
       
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Business <br /> Website</h2>
            <div className="scard01-btn">
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
              <div className="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Portfolio <br /> Website</h2>
            <div className="scard01-btn">
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
              <div className="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Personal <br /> Website</h2>
            <div className="scard01-btn">
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
              <div className="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Event <br /> Website</h2>
            <div className="scard01-btn">
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
              <div className="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        <div className='scard01'>
            <div className='scard01-top'>
            <h2>Educational <br /> Website</h2>
            <div className="scard01-btn">
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
              <div className="scard01-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
            </div>
    
        </div>
        
        
    
      </div>
      </div>

</div> */}
<div className='ab-wb'>
                  <div className="about-wb p-0">
                <div className="container about-wb-image p-0">
                  <div className="image-wb">
                    <img src={web} />
                   
                  </div>
                  <div className="about-wb-content">
                    <div className="para-wb">
                      <p className="about-wb-p1">Web Development</p>
                      <h1 className="about-wb-h1">
                        Web development that scales with your ambition.
                      </h1>
                      <p className="about-wb-content-p1">
                       
                        Web development is the backbone of your digital presence—transforming ideas into seamless, interactive experiences that serve both function and form. A well-developed website does more than just load pages; it ensures speed, security, and smooth navigation while aligning with your brand’s identity and business objectives.<br/><br/>
        
                        Exceptional web development brings together clean code, responsive design, and thoughtful architecture. It balances performance with user experience, translating complex requirements into scalable solutions that work effortlessly across devices and platforms. Every interaction is intentional—crafted to engage users, drive conversions, and support long-term growth.<br/><br/>
                          
                       Professional web development is your silent partner in building credibility and digital efficiency. It enhances trust, supports evolving needs, and ensures your website grows alongside your business. In a fast-paced digital world, a great website isn’t just an asset—it’s a powerful tool that connects, converts, and elevates your brand.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>
          <PackEcomm></PackEcomm>
          <ChooseUs></ChooseUs>
          <Relatedservices services={serviceData} />
          <Footer></Footer>
    </>
  )
}

export default WebDevelopment