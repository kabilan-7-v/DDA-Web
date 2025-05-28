import React from 'react'
import './SignUp.css'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import reg from '../../assets/image/reg-back.png'; 

function SignUp() {
  return (
    <>
    <Navbar></Navbar>
<div className="info-su">
         <div className="container-su">
           <form className="contact-form-su">
             <h1>
               Let’s pick up where we <br/> left off
             </h1>
 
             
             <div className="form-group-su">
               <label for="mobile">Email ID</label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Enter email Id"
                 
                 required
               />
             </div>
             
 
            
 
             <div className="form-textarea-su">
               <label for="description">Password</label>
               <input
                 type="textarea"
                 id="description"
                 name="description"
                 placeholder="Password"
                 
                 required
               />
 
              
             </div>
             <div className='forget'>
             <p>Forget Password ?</p>

             </div>
 
             <div className="form-group-su">
               <button type="button" >
                 Submit & Get OTP
               </button>
             </div>
             
           </form>
           <div className="image-section-su">
            <img src={reg}/>
             <div className="map-details-su">
               <h1>Ready to build the next big   <br/>thing? Let’s go!</h1>
               <p>
                Back to building powerful web solutions.
Sign in to continue creating <br></br> something extraordinary.
               </p>
               
             </div>
 
             
           </div>
         </div>
       </div>
    </>
  )
}

export default SignUp