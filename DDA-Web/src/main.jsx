import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Routerpage from './Router/Routerpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routerpage></Routerpage>
  </StrictMode>,
)
