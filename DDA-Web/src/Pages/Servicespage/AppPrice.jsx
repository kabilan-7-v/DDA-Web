import React from 'react'
import './AppPrice.css'
import ABcomm from '../../assets/image/e-comm.jpg';
import PackApp from '../../Pages/Servicespage/PackApp.jsx';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';

function AppPrice() {
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
      title: 'Graphic Design',
      description: ' Strategic brand building from logos to complete identity systems.',
      image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-3.jpg',
      link: '/graphic'
    }
  ];
  return (
    <>
    <Navbar></Navbar>
    <div className='ab-ap'>
                  <div className="about-ap p-0">
                <div className="container about-ap-image p-0">
                  <div className="image-ap">
                    <img src={ABcomm} />
                   
                  </div>
                  <div className="about-ap-content">
                    <div className="para-ap">
                      <p className="about-ap-p1">App Development</p>
                      <h1 className="about-ap-h1">
                        Developing apps that drive business growth.
                      </h1>
                      <p className="about-ap-content-p1">
                       
                        App development is the craft of creating intuitive, engaging, and high-performing mobile experiences that align with your brand’s identity and goals. A well-built app not only captures user attention but also builds trust, drives engagement, and encourages meaningful interaction.<br/><br/>
        
                        Great app development focuses on seamless user journeys, clean interfaces, and responsive performance across all devices. It blends functionality with thoughtful design to create apps that are both useful and enjoyable, leaving a lasting impression on users.<br/><br/>
                          
                        A professionally developed app works around the clock—boosting customer loyalty, streamlining user experiences, and helping your brand stay ahead in a competitive digital landscape. When executed well, an app becomes a vital tool for business growth and customer connection.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
<PackApp></PackApp>
<ChooseUs></ChooseUs>
<Relatedservices services={serviceData} />

<Footer></Footer>
    </>
  )
}

export default AppPrice