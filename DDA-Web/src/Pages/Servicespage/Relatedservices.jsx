import React from 'react';
import './Relatedservices.css';
import arrow from '../../assets/image/arrow-right.png'; 

function Relatedservices({ services }) {
  return (
    <div className='relate'>
      <div className='related'>
        <div className='related-head'>
          <div className='related-headcontent'>
            <p className="related-p1">Our services</p>
            <h1 className="related-h1">
              Explore our related <br /> services
            </h1>
          </div>
          <div className="related-b1">
            <a href='/services'>
              <button>
                View All related services <img src={arrow} alt="arrow" />
              </button>
            </a>
          </div>
        </div>

        <div className='related-card'>
          {services.map((service, index) => (
            <a href={service.link} key={index}>
              <div className='rcard1'>
                <div className='rcard1-top'>
                  <h2>{service.title.split(' ')[0]}<br />{service.title.split(' ')[1]}</h2>
                  <div className="rcard1-btn">
                    <button><img src={arrow} alt="arrow" /></button>
                  </div>
                </div>
                <hr />
                <div>
                  <p>{service.description}</p>
                </div>
                <div className="rcard1-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Relatedservices;
