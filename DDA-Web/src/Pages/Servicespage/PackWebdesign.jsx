import React from 'react'
import'./PackWebdesign.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck, faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function PackWebdesign() {
    
  return (
    <>
<div className='eweb-price'>
        <div className="package-wd">
          <div className="container package-wd-head">
            <div className="package-wd-headcontent">
              <p className="package-wd-p1">Your Choice</p>
              <h1 className="package-wd-h1">Select engagement models of your choice</h1>
            </div>
          </div>

          <div className="container package-wd-card">
            {/* Sample package with button */}
            <div className="package1-wd">
              <div className="package1-wd-top"><h3>Basic Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 9,999</h1></div>
              <div><p>Perfect for startups and small businesses</p></div>
              <div className="pack-wd-info">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Up to 3 page</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Responsive Design</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> CMS Integration</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 7 days</p>
              </div>
              <hr />
              <div className="pack-wd-button">
                <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
            <div className="package2-wd">
              <div className="package2-wd-top"><h3>Basic Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 19,999</h1></div>
              <div><p>Perfect for startups and small businesses</p></div>
              <div className="pack-wd-info2">
                <p><FontAwesomeIcon icon={faCircleCheck} /> Up to 7 page</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Responsive Design</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> WordPress/Wix </p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 7 days</p>
              </div>
              <hr />
              <div className="pack2-wd-button">
                <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div><div className="package1-wd">
              <div className="package1-wd-top"><h3>Basic Package</h3></div>
              <hr />
              <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 39,999</h1></div>
              <div><p>Perfect for startups and small businesses</p></div>
              <div className="pack-wd-info">
                <p><FontAwesomeIcon icon={faCircleCheck} /> 10+ Custom Pages</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Responsive Design + Animation</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Custom CMS</p>
                <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 15-20 days</p>
              </div>
              <hr />
              <div className="pack-wd-button">
                <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
          

    </>

  )
}

export default PackWebdesign