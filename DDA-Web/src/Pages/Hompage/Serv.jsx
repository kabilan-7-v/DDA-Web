import React from 'react'
import'./Serv.css'
import arrow from '../../assets/image/arrow-right.png'; 



function Serv() {
  return (
    <>
    
    <div className='ser'>
    <div className='servs'>
        <div className='ser-head'>
    <div className='ser-headcontent'>
      <p className="ser-p1">Our Services</p>
      <h1 className="ser-h1">
        What we can offer<br />
        today
      </h1>
    </div>
    <div className="ser-b1">
      <button>
        View All Services <img src={arrow} alt="Description" />

      </button>
    </div>
  </div>
  <div className='ser-card'>
   <a href="/webdevelopment"><div className='scard1'>
        <div className='scard1-top'>
        <h2>Web <br />Development</h2>
        <div class="scard1-btn">
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
          <div class="scard1-image">
          <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
        </div>

    </div></a>
    <div className='scard1'>
        <div className='scard1-top'>
        <h2>Digital <br /> Marketing</h2>
        <div class="scard1-btn">
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
          <div class="scard1-image">
          <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
        </div>

    </div>
    <div className='scard1'>
        <div className='scard1-top'>
        <h2>Game <br /> Development</h2>
        <div class="scard1-btn">
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
          <div class="scard1-image">
          <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-3.jpg" />
        </div>

    </div>
    <div className='scard1'>
        <div className='scard1-top'>
        <h2>Mobile App<br /> Development</h2>
        <div class="scard1-btn">
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
          <div class="scard1-image">
          <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-4.jpg" />
        </div>

    </div>
    <div className='scard1'>
        <div className='scard1-top'>
        <h2>Networking <br /> Services</h2>
        <div class="scard1-btn">
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
          <div class="scard1-image">
          <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-5.jpg" />
        </div>

    </div>
    <div className='scard1'>
        <div className='scard1-top'>
        <h2>Graphics <br /> Design</h2>
        <div class="scard1-btn">
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
          <div class="scard1-image">
          <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-6.jpg" />
        </div>

    </div>
    

  </div>
    

</div>
</div>

        
    </>
  )
}

export default Serv