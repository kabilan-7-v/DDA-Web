import React from 'react'
import './PackBranding.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
function PackBranding
() {
  return (
    <>
 <div className='eweb-price'>
            <div className="package-br">
              <div className="container package-br-head">
                <div className="package-br-headcontent">
                  <p className="package-br-p1">Your Choice</p>
                  <h1 className="package-br-h1">Select engagement models of your choice</h1>
                </div>
              </div>
    
              <div className="container package-br-card">
                {/* Sample package with button */}
                <div className="package1-br">
                  <div className="package1-br-top"><h3>Basic Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 6,999</h1></div>
                  <div><p>Perfect for startups and small businesses</p></div>
                  <div className="pack-br-info">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Basic Logo Design Concept </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Business Card </p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> No Brand Guidelines</p>
                    
                  </div>
                  <hr />
                  <div className="pack-br-button">
                    <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div>
                <div className="package2-br">
                  <div className="package2-br-top"><h3>Standard Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 14,999</h1></div>
                  <div><p>Perfect for startups and small businesses</p></div>
                  <div className="pack-br-info2">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Custom Logo + Variants Logo</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} />  Letterhead & Envelope</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Basic Brand Guidelines</p>
                    
                  </div>
                  <hr />
                  <div className="pack2-br-button">
                    <button>Choose Standard <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div><div className="package1-br">
                  <div className="package1-br-top"><h3>Premium Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 29,999</h1></div>
                  <div><p>Perfect for startups and small businesses</p></div>
                  <div className="pack-br-info">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Premium Logo + Guidebook</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Full Suite + Mockups</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Full Brand Guidelines</p>
                    
                  </div>
                  <hr />
                  <div className="pack-br-button">
                    <button>Choose Premium <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default PackBranding
