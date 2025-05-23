import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Hompage/Homepage";
import AboutPage from "../Pages/Aboutpage/AboutPage";
import Contactpage from "../Pages/Contactpage/Contactpage";


import Sevicespage from "../Pages/Servicespage/Sevicespage";
import WebDevelopment from "../Pages/Servicespage/WebDevelopment";
import Phoneverfications from "../firebase/Phoneverfications";
import Portfoliopage from "../Pages/Portfolio/Portfoliopage";
import WDprice from "../Pages/Servicespage/WDprice";
import AppPrice from "../Pages/Servicespage/AppPrice";
import BrandingPrice from "../Pages/Servicespage/BrandingPrice";
import Graphic from "../Pages/Servicespage/Graphic";
import UxUiPrice from "../Pages/Servicespage/UxUiPrice";

function Routerpage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/aboutus" element={<AboutPage></AboutPage>}></Route>
        <Route path="/services" element={<Sevicespage></Sevicespage>} ></Route>
        <Route path="/webdevelopment" element={<WebDevelopment></WebDevelopment>} ></Route>
        <Route path="/contactus" element={<Contactpage></Contactpage>} ></Route>
        <Route path="/portfolio" element={<Portfoliopage></Portfoliopage>} ></Route>
        <Route path="/wdprice" element={<WDprice></WDprice>} ></Route>
        <Route path="/app-price" element={<AppPrice></AppPrice>} ></Route>
        <Route path="/branding-price" element={<BrandingPrice></BrandingPrice>} ></Route>
        <Route path="/graphic" element={<Graphic></Graphic>} ></Route>
        <Route path="/uxui-price" element={<UxUiPrice></UxUiPrice>} ></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default Routerpage;
