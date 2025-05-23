import React from 'react'
import './PackUxUiPrice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck, faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function PackUxUiPrice() {
  return (
    <>
 <div className='ux-price'>
                <div className="package-ux">
                  <div className="container package-ux-head">
                    <div className="package-ux-headcontent">
                      <p className="package-ux-p1">Your Choice</p>
                      <h1 className="package-ux-h1">Select engagement models of your choice</h1>
                    </div>
                  </div>
        
                  <div className="container package-ux-card">
                    {/* Sample package with button */}
                    <div className="package1-ux">
                      <div className="package1-ux-top"><h3>Basic Package</h3></div>
                      <hr />
                      <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 4,999</h1></div>
                      
                      <div className="pack-ux-info">
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Mobile App or Website (Up to 3 Screens) </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Wireframes </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Figma/Adobe XD Delivery </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  2 Revisions </p>
                        
                        
                      </div>
                      <hr />
                      <div className="pack-ux-button">
                        <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                    </div>
                    <div className="package2-ux">
                      <div className="package2-ux-top"><h3>Standard Package</h3></div>
                      <hr />
                      <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 14,999</h1></div>
                      
                      <div className="pack-ux-info2">
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Up to 8 Screens </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  User Flows & Wireframes </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Responsive Design </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Design System (Colors, Typography) </p>
                        
                        
                      </div>
                      <hr />
                      <div className="pack2-ux-button">
                        <button>Choose Standard <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                    </div><div className="package1-ux">
                      <div className="package1-ux-top"><h3>Premium Package</h3></div>
                      <hr />
                      <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 29.999</h1></div>
                      
                      <div className="pack-ux-info">
                        <p><FontAwesomeIcon icon={faCircleCheck} /> 15+ Screens </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} /> UX Research & Personas </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} /> Prototyping & Interaction </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Handoff to Developers </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Unlimited Revisions </p>
                         
                        
                      </div>
                      <hr />
                      <div className="pack-ux-button">
                        <button>Choose Premium <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default PackUxUiPrice