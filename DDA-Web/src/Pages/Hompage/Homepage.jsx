import React from 'react'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import Abt from '../../Pages/Hompage/Abt'

import './Homepage.css';
import Serv from './Serv';
import Work from './Work'
import ChooseUs from './ChooseUs'
import Footer from './Footer'

function Homepage() {
  return (
    <>
        <Navbar></Navbar>

        <div className='banner'>
          <div className='black-banner'></div>
          <div className='banner-content'>
          <p className="p1">About Our Company</p>
        <h1>
          Web Design, SEO & Internet Marketing For <span>Your Business</span>
        </h1>
        <p className="p2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo veritatis et quasi architecto beatae vitae dicta sunt.
        </p>
        <button className="banner-b1">
          Free Consultation<i className="fa-solid fa-arrow-right"></i></button>
          <button className="banner-b2">
          View Portfolio<i className="fa-solid fa-arrow-right"></i>
        </button>

          </div>

        </div>
        
      <Abt></Abt>
      <Serv></Serv>
      <Work></Work>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
      
      
    </>
  )
}

export default Homepage