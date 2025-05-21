import React from 'react'
import Navbar from '../../Component/Navbarcomponent.jsx/Navbar'
import './Portfoliopage.css'
import AllPortfolio from './AllPortfolio'
import Footer from '../../Pages/Hompage/Footer.jsx';

function Portfoliopage() {
  return (
    <>
    <Navbar></Navbar>
    <div className='portfolio'>
    <div className='port1'>
        <ul>
            <li>
    <button>All</button>
    <button>E-Commerce</button>
    <button>Personal portfolio</button>
    <button>Education portfolio</button>
    <button>Business Website</button>
    </li>
    </ul>
    </div>
    </div>
<AllPortfolio></AllPortfolio>
<Footer></Footer>

    </>
  )
}

export default Portfoliopage