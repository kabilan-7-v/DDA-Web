import React, { useState } from 'react'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import './Portfoliopage.css'
import AllPortfolio from './AllPortfolio'
import Footer from '../../Pages/Hompage/Footer.jsx';

function Portfoliopage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <Navbar />
      <div className='portfolio'>
        <div className='port1'>
          <ul>
            <li>
              <button onClick={() => setSelectedCategory('All')}>All</button>
              <button onClick={() => setSelectedCategory('E-Commerce')}>E-Commerce</button>
              <button onClick={() => setSelectedCategory('Personal portfolio')}>Personal portfolio</button>
              <button onClick={() => setSelectedCategory('Education portfolio')}>Education portfolio</button>
              <button onClick={() => setSelectedCategory('Business Website')}>Business Website</button>
            </li>
          </ul>
        </div>
      </div>
      <AllPortfolio category={selectedCategory} />
      <Footer />
    </>
  )
}

export default Portfoliopage
