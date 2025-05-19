import React from 'react'
import './PackEcomm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupee} from '@fortawesome/free-solid-svg-icons';






function PackEcomm() {
  return (
    <>
    <div className='ecomm-price'>
       <div className="package">
      <div class="container package-head ">
        <div class="package-headcontent">
          <p class="package-p1">Your Choice</p>
          <h1 class="package-h1">
            Select engagement models 
            of  your choice
          </h1>
        </div>
        
      </div>

      <div class="container package-card">
        <div class="package1">
          <div class="package1-top">
            <h3>Basic Package</h3>
            
          </div>
          <hr />
          <div>
            <h1>
             <FontAwesomeIcon icon={faIndianRupee} />  14,999
            </h1>
          </div>
          <div>
            <p>Perfect for startups and small businesses</p>
          </div>
          <div class="pack-info">
            <p><FontAwesomeIcon icon={faCircleCheck} /> Static page</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Basic contact form</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Hosting support 1 Month</p>
            

          </div>
        
          
        
        </div>

        <div class="package2">
          <div class="package2-top">
            <h3>Standard Package</h3>
            
          </div>
          <hr />
          <div>
            <h1>
             <FontAwesomeIcon icon={faIndianRupee} />  29,999
            </h1>
          </div>
          <div>
            <p>Ideal for growing brands</p>
          </div>
          <div class="pack-info2">
            <p><FontAwesomeIcon icon={faCircleCheck} /> Dynamic</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Advanced contact form</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Hosting support 3 Month</p>
            

          </div>
          
        
          
        
        </div>

        <div class="package1">
          <div class="package1-top">
            <h3>Premium Package</h3>
            
          </div>
          <hr />
          <div>
            <h1>
             <FontAwesomeIcon icon={faIndianRupee} /> 59,999
            </h1>
          </div>
          <div>
            <p>For established businesses aiming for a premium experience</p>
          </div>
          <div class="pack-info">
            <p><FontAwesomeIcon icon={faCircleCheck} /> Full-stack w/ Admin</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Integration + API</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Hosting support 6 Month</p>

          </div>
        
          
        
        </div>

        

        

        
      </div>
      
    </div>

    </div>


    </>
  )
}

export default PackEcomm