import React from 'react'
import './Relatedservices.css'
import arrow from '../../assets/image/arrow-right.png'; 


function Relatedservices() {
  return (
    <>
    <div className='relate'>
        <div className='related'>
                <div className='related-head'>
            <div className='related-headcontent'>
              <p className="related-p1">Our services</p>
              <h1 className="related-h1">
                Explore our related <br/> services
              </h1>
            </div>
            <div className="related-b1">
          <a href='/services'>   <button>
                View All related services <img src={arrow} alt="Description" />
        
              </button></a> 
            </div>
          </div>
          <div className='related-card'>
           <a href="/webdevelopment">
           <div className='rcard1'>
                <div className='rcard1-top'>
                <h2>Web <br />Development</h2>
                <div class="rcard1-btn">
                      <button><img src={arrow} alt="Description" /></button>
                    </div>
        
                </div>
                <hr />
        
                <div>
                    <p>
                      Custom, responsive websites that drive performance and visibility.
                    </p>
                  </div>
                  <div class="rcard1-image">
                  <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg"/>
                </div>
        
            </div></a>

         <a href='/app-price'>   <div className='rcard1'>
                <div className='rcard1-top'>
                <h2>App <br /> Development</h2>
                <div class="rcard1-btn">
                      <button><img src={arrow} alt="Description" /></button>
                    </div>
        
                </div>
                <hr />
        
                <div>
                    <p>
                       Smart, user-friendly mobile applications for Android and iOS platforms.

                    </p>
                  </div>
                  <div class="rcard1-image">
                  <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
                </div>
        
            </div></a>
          <a href='/graphic'>  <div className='rcard1'>
                <div className='rcard1-top'>
                <h2>Graphic <br /> Design</h2>
                <div class="rcard1-btn">
                      <button><img src={arrow} alt="Description" /></button>
                    </div>
        
                </div>
                <hr />
        
                <div>
                    <p>
                       Compelling visuals and marketing materials that reflect your brand identity.
                    </p>
                  </div>
                  <div class="rcard1-image">
                  <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
                </div>
        
            </div></a>
            
            
            
            
        
          </div>
            
        
        </div>

    </div>

    </>
  )
}

export default Relatedservices