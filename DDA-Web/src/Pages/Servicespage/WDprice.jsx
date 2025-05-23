import React from 'react'
import'./WDprice.css'
import ABcomm from '../../assets/image/e-comm.jpg';
import PackWebdesign from '../../Pages/Servicespage/PackWebdesign.jsx';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';


function WDprice() {
  return (
    <>
    <Navbar></Navbar>
     <div className='ab-wd'>
              <div className="about-wd p-0">
            <div className="container about-wd-image p-0">
              <div className="image-wd">
                <img src={ABcomm} />
               
              </div>
              <div className="about-wd-content">
                <div className="para-wd">
                  <p className="about-wd-p1">Website design</p>
                  <h1 className="about-wd-h1">
                    Designing websites that drive brand growth.
                  </h1>
                  <p className="about-wd-content-p1">
                   
                    Website design is the art of crafting visually appealing, user-friendly platforms that reflect a brand’s identity and values. A well-designed website not only captures attention but also builds trust and encourages visitors to take action..<br/><br/>
    
                    Great website design focuses on clean layouts, intuitive navigation, and a seamless user experience across all devices. It combines aesthetics with usability to guide visitors effortlessly through your content, creating a lasting impression.<br/><br/>
                      
                    A professional website works for you 24/7—enhancing your brand presence, increasing engagement, and helping you stand out in a crowded digital space. When done right, it becomes a powerful asset for growing your business.
                  </p>
                  <button className="about-wd-b1">
                    Free-consultation<i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

<PackWebdesign></PackWebdesign>
<ChooseUs></ChooseUs>

<Relatedservices></Relatedservices>
<Footer></Footer>
    </>
  )
}

export default WDprice