import React from 'react'
import './UxUiPrice.css'
import ABcomm from '../../assets/image/e-comm.jpg';
import PackUxUiPrice from '../../Pages/Servicespage/PackUxUiPrice.jsx';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';

function UxUiPrice() {
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
      image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg',
      link: '/app-price'
    },
    {
      title: 'Graphic Design',
      description: 'Compelling visuals and marketing materials that reflect your brand identity.',
      image: 'https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg',
      link: '/graphic'
    }
  ];
  return (
    <>
    <Navbar></Navbar>
<div className='ab-ux'>
                  <div className="about-ux p-0">
                <div className="container about-ux-image p-0">
                  <div className="image-ux">
                    <img src={ABcomm} />
                   
                  </div>
                  <div className="about-ux-content">
                    <div className="para-ux">
                      <p className="about-ux-p1">UX/UI Design</p>
                      <h1 className="about-ux-h1">
                        Designing Experiences That Shape Your Brand.
                      </h1>
                      <p className="about-ux-content-p1">
                       
                        UX/UI design is the art of creating digital experiences that are both intuitive and impactful. It goes beyond aesthetics—focusing on how users interact with your product, how easily they achieve their goals, and how they feel throughout the journey. Great design guides users seamlessly while reinforcing your brand’s identity at every touchpoint.<br/><br/>
        
                        Exceptional UX/UI design balances creativity with strategy. It blends user research, interaction design, and visual harmony to turn complex ideas into simple, engaging interfaces. Whether it's a mobile app, website, or software dashboard, thoughtful design makes every element purposeful—enhancing usability, clarity, and consistency.<br/><br/>
                          
                        Professional UX/UI design builds trust and drives results. In today’s competitive digital world, your interface is often your first impression. A well-crafted user experience doesn’t just delight users—it boosts retention, encourages action, and sets your brand apart by delivering value through every interaction.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>
                                <PackUxUiPrice></PackUxUiPrice>
<ChooseUs></ChooseUs>
<Relatedservices services={serviceData} />

<Footer></Footer>
    </>
  )
}

export default UxUiPrice