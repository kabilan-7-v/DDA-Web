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
                  <div><p>Perfect for startups and small businesses</p></div>
                  <div className="pack-ap-info">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Android (Basic) platform</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Features upto 3 - 5 page</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> 15 Days Maintenance</p>
                    
                  </div>
                  <hr />
                  <div className="pack-ap-button">
                    <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div>
                <div className="package2-ap">
                  <div className="package2-ap-top"><h3>Basic Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 49,999</h1></div>
                  <div><p>Perfect for startups and small businesses</p></div>
                  <div className="pack-ap-info2">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Android (Basic) & iOS (UI) platform</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Features upto 5 - 10 page</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> 1 Month Maintenance</p>
                    
                  </div>
                  <hr />
                  <div className="pack2-ap-button">
                    <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                </div><div className="package1-ap">
                  <div className="package1-ap-top"><h3>Basic Package</h3></div>
                  <hr />
                  <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 99,999+</h1></div>
                  <div><p>Perfect for startups and small businesses</p></div>
                  <div className="pack-ap-info">
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Android, iOS + Backend platform</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Features Full App + APIse</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> 3 Month Maintenance</p>
                    
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