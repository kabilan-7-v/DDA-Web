import React from 'react'
import './PackApp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck, faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function PackApp() {
  return (
    <>
    <div className='eweb-price'>
            <div className="package-ap">
              <div className="container package-ap-head">
                <div className="package-ap-headcontent">
                  <p className="package-ap-p1">Your Choice</p>
                  <h1 className="package-ap-h1">Select engagement models of your choice</h1>
                </div>
              </div>
    
              <div className="container package-ap-card">
                {/* Sample package with button */}
                <div className="package1-ap">
                  <div className="package1-ap-top"><h3>Basic Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 24,999</h1></div>
                  
                  <div className="pack-ap-info">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Single Platform (Android or iOS)</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Up to 5 Screens</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Static Content</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Basic UI/UX</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 10–12 Days</p>
                    
                  </div>
                  <hr />
                  <div className="pack-ap-button">
                    <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div>
                <div className="package2-ap">
                  <div className="package2-ap-top"><h3>Standard Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 49,999</h1></div>
                  
                  <div className="pack-ap-info2">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Android + iOS (Hybrid with React Native/Flutter)</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Up to 10 Screens</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> API Integration</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Firebase Authentication</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 20 Days</p>
                    
                  </div>
                  <hr />
                  <div className="pack2-ap-button">
                    <button>Choose Standard <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div><div className="package1-ap">
                  <div className="package1-ap-top"><h3>Premium Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 99,999+</h1></div>
                  
                  <div className="pack-ap-info">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Fully Custom App </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Advanced Features (Push Notifications, Payment Gateway, Maps) </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Admin Panel </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Backend Development </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Delivery in 30–45 Days </p>
                    
                  </div>
                  <hr />
                  <div className="pack-ap-button">
                    <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default PackApp