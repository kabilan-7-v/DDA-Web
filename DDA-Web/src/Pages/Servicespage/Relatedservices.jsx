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
              <button>
                View All related services <img src={arrow} alt="Description" />
        
              </button>
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
                      totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                      architecto beatae
                    </p>
                  </div>
                  <div class="rcard1-image">
                  <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg"/>
                </div>
        
            </div></a>
            <div className='rcard1'>
                <div className='rcard1-top'>
                <h2>Digital <br /> Marketing</h2>
                <div class="rcard1-btn">
                      <button><img src={arrow} alt="Description" /></button>
                    </div>
        
                </div>
                <hr />
        
                <div>
                    <p>
                      totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                      architecto beatae
                    </p>
                  </div>
                  <div class="rcard1-image">
                  <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
                </div>
        
            </div>
            <div className='rcard1'>
                <div className='rcard1-top'>
                <h2>Game <br /> Development</h2>
                <div class="rcard1-btn">
                      <button><img src={arrow} alt="Description" /></button>
                    </div>
        
                </div>
                <hr />
        
                <div>
                    <p>
                      totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                      architecto beatae
                    </p>
                  </div>
                  <div class="rcard1-image">
                  <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
                </div>
        
            </div>
            
            
            
            
        
          </div>
            
        
        </div>

    </div>

    </>
  )
}

export default Relatedservices