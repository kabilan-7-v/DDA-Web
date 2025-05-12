import React from 'react'
import './Work.css'
import arrow from '../../assets/image/arrow-right.png'; 

function wrk() {
  return (
    <>
    <div className='wrk-container'>
        <div className='wrk-sec'>
        <div class="work-head">
          <div class="work-headcontent">
            <p class="work-p1">Our Works</p>
            <h1 class="work-h1">
              Excellence from concept <br /> to completion
            </h1>
          </div>
          <div class="work-b1">
            <button>
              All portfolio<img src={arrow} alt="Description" />
            </button>
          </div>
        </div>

        <div className="container work-card">
        <div className="wcard1">
            <div className="work-image">
              <div className="our-work-image">
              <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg" />
              </div>
              <h3>Infinity initiative</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi culpa eius et amet earum </p>
          
            </div>
          </div>

          <div className="wcard1">
            <div className="work-image">
              <div className="our-work-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg" />
                </div>
              <h3>Infinity initiative</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi culpa eius et amet earum </p>
          
            </div>
          </div>

          <div className="wcard1">
            <div className="work-image">
              <div className="our-work-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg" />
                </div>
              <h3>Infinity initiative</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi culpa eius et amet earum </p>
          
            </div>
          </div>

          <div className="wcard1">
            <div className="work-image">
              <div className="our-work-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/works-img-4.jpg" />
                </div>
              <h3>Infinity initiative</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi culpa eius et amet earum </p>
          
            </div>
          </div>
          
      </div>

        </div>

    </div>
    </>
  )
}

export default wrk