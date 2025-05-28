import React from 'react'
import './Graphic.css'
import graphic from '../../assets/image/graphic.jpg';
import PackGraphic from '../../Pages/Servicespage/PackGraphic.jsx';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';

function Graphic() {
  const serviceData = [
      {
      title: 'Web Development',
      description: 'Custom, responsive websites that drive performance and visibility.',
      image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg',
      link: '/webdevelopment'
    },
    {
      title: 'Branding Design',
      description: 'Smart, user-friendly mobile applications for Android and iOS platforms.',
      image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-5.jpg',
      link: 'branding-price'
    },
    {
      title: 'UIUX Design',
      description: 'Seamless and engaging user experiences across web and mobile platforms.',
      image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-4.jpg',
      link: '/uxui-price'
    }
  ];
  return (
    <>
    <Navbar></Navbar>
<div className='ab-gr'>
                  <div className="about-gr p-0">
                <div className="container about-gr-image p-0">
                  <div className="image-gr">
                    <img src={graphic} />
                   
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
<Relatedservices services={serviceData} />

<Footer></Footer>
    </>
  )
}

export default Graphic