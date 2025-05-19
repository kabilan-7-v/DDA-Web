import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Routerpage from './Router/Routerpage.jsx'
import RazorpayCheckout from './firebase/RazorpayCheckout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RazorpayCheckout/>
    {/* <Routerpage></Routerpage> */}
  </StrictMode>,
)
