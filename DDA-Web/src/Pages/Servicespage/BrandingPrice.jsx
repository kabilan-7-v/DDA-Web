import React from 'react'
import './BrandingPrice.css'
import brand from '../../assets/image/branding.jpg';
import PackBranding from '../../Pages/Servicespage/PackBranding.jsx';
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import ChooseUs from '../../Pages/Hompage/ChooseUs.jsx';
import Relatedservices from '../../Pages/Servicespage/Relatedservices.jsx';
import Footer from '../../Pages/Hompage/Footer.jsx';
function BrandingPrice() {
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
     <div className='ab-br'>
                  <div className="about-br p-0">
                <div className="container about-br-image p-0">
                  <div className="image-br">
                    <img src={brand} />
                   
                  </div>
                  <div className="about-br-content">
                    <div className="para-br">
                      <p className="about-br-p1">Branding Design </p>
                      <h1 className="about-br-h1">
                        Creating brand identities that make an impact.
                      </h1>
                      <p className="about-br-content-p1">
                       
                        Branding is the art of shaping a distinct, memorable identity that communicates your values, vision, and purpose. A strong brand not only captures attention but also builds trust, creates emotional connections, and drives lasting customer loyalty.<br/><br/>
        
                        Effective branding focuses on consistency, clarity, and authenticity across every touchpoint. From logo and color palette to messaging and tone of voice, it brings together visual and verbal elements to create a cohesive brand experience that resonates with your audience.<br/><br/>
                          
                        A well-developed brand works 24/7—enhancing recognition, reinforcing credibility, and helping you stand out in a crowded marketplace. When done right, branding becomes more than just design—it becomes the foundation for meaningful growth and long-term success.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <PackBranding></PackBranding>
              <ChooseUs></ChooseUs>

              <Relatedservices services={serviceData} />

<Footer></Footer>
    </>
  )
}

export default BrandingPrice