import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import Routerpage from './Router/Routerpage.jsx'
import logo from './assets/image/logo.png';
// import RazorpayCheckout from './firebase/RazorpayCheckout.jsx'
import { store } from './app/store.js';
import Register from './Pages/Auth/Registerpage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    
    <Provider store={store}>
    <Routerpage></Routerpage>
    </Provider>
  </StrictMode>,
)
