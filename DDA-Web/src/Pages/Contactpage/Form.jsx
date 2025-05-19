import React from 'react'
import './Form.css'
import Monitor from '../../assets/image/monitor.png'; 


function Form() {
  return (
    <>
    
        <div className='info'>
            <div className='container-cp'>
            <form className="contact-form">
    <h2>Contact Form</h2>

    <div className="form-group">
      <label for="mobile">Email ID</label>
      <input type="email" id="email" name="email" placeholder="Enter email Id" required />
    </div>

    <div className="form-group">
      <button type="button" className="btn-secondary">Get OTP</button>
    </div>

    <div className="form-group">
      <label for="otp">Enter OTP</label>
      <input type="text" id="otp" name="otp" placeholder="Enter OTP" required />
    </div>

    <div className="form-group">
      <button type="button">Verify</button>
    </div>

    <div className="form-group">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />
    </div>

    {/* <div className="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required />
    </div> */}

    <div className="form-textarea">
      <label for="description">Description</label>
            <input type="textarea" id="description" name="description" placeholder="Your Comments" required />

      {/* <select id="service" name="service" required>
        <option value="">Choose a service</option>
        <option value="web">Web Development</option>
        <option value="app">App Development</option>
        <option value="design">UI/UX Design</option>
      </select> */}
    </div>

    <div className="form-group">
      <button type="submit">Submit</button>
    </div>

  </form>
  <div class="image-section">
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.228658369643!2d78.1414504!3d9.9149048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5e8e6bfbeb7%3A0x87151bd0a7a17d01!2sBuff%20Creative%20College%20Madurai!5e0!3m2!1sen!2sin!4v1747647563758!5m2!1sen!2sin" 
    width="100%"
    height="600px"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="fast"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
    </div>
  </div>

        </div>

    

    </>
  )
}

export default Form