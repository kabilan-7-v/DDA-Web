import React from 'react'
import './Graphic.css'
import ABcomm from '../../assets/image/e-comm.jpg';
import PackGraphic from '../../Pages/Servicespage/PackGraphic.jsx';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';

function Graphic() {
  return (
    <>
    <Navbar></Navbar>
<div className='ab-gr'>
                  <div className="about-gr p-0">
                <div className="container about-gr-image p-0">
                  <div className="image-gr">
                    <img src={ABcomm} />
                   
                  </div>
                  <div className="about-gr-content">
                    <div className="para-gr">
                      <p className="about-gr-p1">Graphic Design</p>
                      <h1 className="about-gr-h1">
                        Designing visuals that grow your brand.
                      </h1>
                      <p className="about-gr-content-p1">
                       
                        Graphic design is the art of visually communicating ideas in ways that are clear, compelling, and deeply aligned with your brand’s identity and goals. A well-executed design doesn’t just capture attention—it builds credibility, fosters emotional connections, and drives meaningful engagement.<br/><br/>
        
                        Exceptional graphic design focuses on visual harmony, strategic layout, and brand consistency across all platforms. It blends creativity with purpose, transforming complex messages into designs that are both functional and memorable—leaving a lasting impression on your audience.<br/><br/>
                          
                        Professional graphic design works behind the scenes to strengthen brand recognition, enhance user experience, and support business growth. In a crowded digital world, design becomes your silent ambassador—speaking volumes, building trust, and setting your brand apart.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>

                           <PackGraphic></PackGraphic> 
<ChooseUs></ChooseUs>
<Relatedservices></Relatedservices>
<Footer></Footer>
    </>
  )
}

export default Graphic