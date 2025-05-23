import React from 'react'
import './PackGraphic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleCheck, faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function PackGraphic() {
  return (
    <>
     <div className='gr-price'>
                <div className="package-gr">
                  <div className="container package-gr-head">
                    <div className="package-gr-headcontent">
                      <p className="package-gr-p1">Your Choice</p>
                      <h1 className="package-gr-h1">Select engagement models of your choice</h1>
                    </div>
                  </div>
        
                  <div className="container package-gr-card">
                    {/* Sample package with button */}
                    <div className="package1-gr">
                      <div className="package1-gr-top"><h3>Basic Package</h3></div>
                      <hr />
                      <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 2,499</h1></div>
                      
                      <div className="pack-gr-info">
                        <p><FontAwesomeIcon icon={faCircleCheck} />  5 Social Media Posts</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  1 Poster Design</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  JPG & PNG Files</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  2 Revisions </p>
                        
                        
                      </div>
                      <hr />
                      <div className="pack-gr-button">
                        <button>Choose Basic <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                    </div>
                    <div className="package2-gr">
                      <div className="package2-gr-top"><h3>Standard Package</h3></div>
                      <hr />
                      <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 6,999</h1></div>
                      
                      <div className="pack-gr-info2">
                        <p><FontAwesomeIcon icon={faCircleCheck} />  15 Social Media Posts  </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  3 Posters/Flyers  </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Logo or Business Card  </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Source Files + 3 Revisions  </p>
                        
                        
                      </div>
                      <hr />
                      <div className="pack2-gr-button">
                        <button>Choose Standard <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                    </div><div className="package1-gr">
                      <div className="package1-gr-top"><h3>Premium Package</h3></div>
                      <hr />
                      <div><h1><FontAwesomeIcon icon={faIndianRupee} /> 14.999</h1></div>
                      
                      <div className="pack-gr-info">
                        <p><FontAwesomeIcon icon={faCircleCheck} />  30 Social Media Creatives </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  5 Posters/Banners </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Full Branding Kit (Logo, Card, Letterhead) </p>
                        <p><FontAwesomeIcon icon={faCircleCheck} />  Source Files + Unlimited Revisions </p>
                        
                        
                      </div>
                      <hr />
                      <div className="pack-gr-button">
                        <button>Choose Premium <FontAwesomeIcon icon={faArrowRight} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    </>
  )
}

export default PackGraphic