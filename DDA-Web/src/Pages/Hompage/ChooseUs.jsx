import React from 'react'
import './ChooseUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Bulb from '../../assets/image/bulb.png'
import World from '../../assets/image/world.png'

function ChooseUs() {
  return (
    <>
    <div className='choose-container'>
      <div className='choose-sec'>
      <div className="why-choose-head p-0">
        <div className="why-choose-headcontent">
          <p className="why-choose-p1">Why Choose Us</p>
          <h1 className="why-choose-h1">
            Why Choose Us ?
          </h1>
        </div>
      </div>

    <div className='ycard'>
    <div class="ycard1">
          <img src={Bulb} alt='Bulb' />
          <h3>Innovation</h3>
          <p>Where ideas spark change and technology meets imagination.</p>
        </div>
        <div class="ycard1">
        <img src={Bulb} alt='Bulb' />
        <h3>Quality-Focused</h3>
          <p>High-performance solutions built for speed, usability, and cross-device reliability</p>
        </div>
        <div class="ycard1">
        <img src={Bulb} alt='Bulb' />
        <h3>Value For Money</h3>
          <p>Premium quality. Fair price. Maximum value.</p>
        </div>

        <div className='ycard2'>
          <div className='ycard2-h1' >
          <h1>Do you want to explore<br />
          our outstanding work?</h1>
          <div className='world'>
          <img src={World} alt='Bulb' />
          </div>
          
          </div>
          
          <p>At DesignDot Acadamy, we create innovative, user-focused web solutions that <br /> combine sleek design with powerful functionality—helping businesses grow and <br /> stand out in the digital world.</p>
          <div className="ycard2-b1">
      <button>
        
        LinkedIn
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <button>
        
        Instagram
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <button>
        Contact Us
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
       

        </div>
        

    </div>

      
      </div>

    </div>

    </>
  )
}

export default ChooseUs