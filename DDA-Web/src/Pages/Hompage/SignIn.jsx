import React from 'react'
import './SignIn.css'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import reg from '../../assets/image/reg-back.png'; 



function SignIn() {
  return (
    <>
    <Navbar></Navbar>
 <div className="info-si">
         <div className="container-si">
           <form className="contact-form-si">
             <h1>
               We’re Excited to Build <br/> With You
             </h1>
 
             <div className="form-group-si">
               <label for="name">Full Name</label>
               <input
                 type="text"
                 id="name"
                 name="name"
                 placeholder="Enter your name"
                 
                 required
               />
             </div>
             <div className="form-group-si">
               <label for="mobile">Email ID</label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Enter email Id"
                 
                 required
               />
             </div>
             <div className="form-group-si">
               <label for="number">Enter Phone Number</label>
               <input
                 type="text"
                 id="phone"
                 name="phone"
                 placeholder="Enter Phone Number"
                 
                 required
               />
             </div>
 
            
 
             <div className="form-textarea-si">
               <label for="description">Password</label>
               <input
                 type="textarea"
                 id="description"
                 name="description"
                 placeholder="Password"
                 
                 required
               />
 
              
             </div>
 
             <div className="form-group-si">
               <button type="button" >
                 Submit & Get OTP
               </button>
             </div>
             <div className="form-group-p1-si">
               <p>Please enter the code that was sent to your email ID</p>
             </div>
             <div className="otp-box-si">
               <input
                 id="otp1"
                 type="text"
                 
                 maxLength={1}
               />
               <input
                 id="otp2"
                 type="text"
                
                 maxLength={1}
               />
               <input
                 id="otp3"
                 type="text"
                
                 maxLength={1}
               />
               <input
                 id="otp4"
                 type="text"
                
                 maxLength={1}
               />
               <input
                 id="otp5"
                 type="text"
                 
                 maxLength={1}
               />
               <input
                 id="otp6"
                 type="text"
               
                 maxLength={1}
               />
             </div>
             <div className="form-verify-si">
             <button type="submit" >
               Verify
             </button>
             </div>
           </form>
           <div className="image-section-si">
            <img src={reg}/>
             <div className="map-details-si">
               <h1>Let’s build your next <br/> big  thing together</h1>
               <p>
                 Turn your ideas into powerful web solutions.
Sign up and let's build <br></br> something extraordinary.
               </p>
               
             </div>
 
             
           </div>
         </div>
       </div>

    </>
  )
}

export default SignIn