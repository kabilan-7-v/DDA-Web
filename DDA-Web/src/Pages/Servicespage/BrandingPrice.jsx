import React from 'react'
import './BrandingPrice.css'
import ABcomm from '../../assets/image/e-comm.jpg';
import PackBranding from '../../Pages/Servicespage/PackBranding.jsx';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';
function BrandingPrice() {
  return (
    <>
<Navbar></Navbar>
     <div className='ab-br'>
                  <div className="about-br p-0">
                <div className="container about-br-image p-0">
                  <div className="image-br">
                    <img src={ABcomm} />
                   
                  </div>
                  <div className="about-br-content">
                    <div className="para-br">
                      <p className="about-br-p1">Branding Package </p>
                      <h1 className="about-br-h1">
                        Creating brand identities that make an impact.
                      </h1>
                      <p className="about-br-content-p1">
                       
                        Branding is the art of shaping a distinct, memorable identity that communicates your values, vision, and purpose. A strong brand not only captures attention but also builds trust, creates emotional connections, and drives lasting customer loyalty.<br/><br/>
        
                        Effective branding focuses on consistency, clarity, and authenticity across every touchpoint. From logo and color palette to messaging and tone of voice, it brings together visual and verbal elements to create a cohesive brand experience that resonates with your audience.<br/><br/>
                          
                        A well-developed brand works 24/7—enhancing recognition, reinforcing credibility, and helping you stand out in a crowded marketplace. When done right, branding becomes more than just design—it becomes the foundation for meaningful growth and long-term success.
                      </p>
                      <button className="about-br-b1">
                        Free-consultation<i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <ChooseUs></ChooseUs>
<PackBranding></PackBranding>
<Relatedservices></Relatedservices>
<Footer></Footer>
    </>
  )
}

export default BrandingPrice