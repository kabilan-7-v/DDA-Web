import React from 'react';
import './Abt.css';

function Abt() {
  return (
    <>
        <div className='ab'>
      <div className="about">
        <div className="container about-head p-0">
          <p className="about-p1">About Company</p>
          <h1 className="about-h1">
            Websites that tell your<br />
            brand's story
          </h1>
        </div>
        <div className="container about-image p-0">
          <div className="image">
            <img
              src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/about-us-img.jpg"
              alt="About Us"
            />
          </div>
          <div className="about-content">
            <div className="para">
              <p className="about-content-p1">
                At DesignDot Academy, we specialize in building dynamic, user-friendly, and performance-driven web solutions that empower businesses to succeed online. Our team is made up of passionate developers, designers, and strategists who collaborate closely to turn your vision into a fully functional and engaging digital experience.<br /><br />

                We offer a wide range of services, including custom website development, web application design, e-commerce platforms, CMS integration, and responsive UI/UX design. Every solution we create is tailored to meet the specific needs of our clients, ensuring that each project not only looks great but also performs seamlessly across all devices and platforms.<br /><br />

                What sets us apart is our commitment to quality, innovation, and long-term client relationships. We follow a transparent and agile development process, keeping you involved at every stage. Whether you're launching a new idea or upgrading an existing platform, we’re here to deliver reliable, scalable, and future-ready web solutions that support your business goals.
              </p>
              <button className="about-b1">
                Free Consultation <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Abt;
