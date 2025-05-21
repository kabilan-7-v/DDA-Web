import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import Routerpage from './Router/Routerpage.jsx'
// import RazorpayCheckout from './firebase/RazorpayCheckout.jsx'
import { store } from './app/store.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RazorpayCheckout/> */}
    <Provider store={store}>
    <Routerpage></Routerpage>
    </Provider>
  </StrictMode>,
)
