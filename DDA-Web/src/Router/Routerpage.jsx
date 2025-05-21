import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Hompage/Homepage";
import AboutPage from "../Pages/Aboutpage/AboutPage";
import Contactpage from "../Pages/Contactpage/Contactpage";


import Sevicespage from "../Pages/Servicespage/Sevicespage";
import WebDevelopment from "../Pages/Servicespage/WebDevelopment";
import Ecommerce from "../Pages/Servicespage/Ecommerce";
import Phoneverfications from "../firebase/Phoneverfications";

function Routerpage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/aboutus" element={<AboutPage></AboutPage>}></Route>
        <Route path="/services" element={<Sevicespage></Sevicespage>} ></Route>
        <Route path="/webdevelopment" element={<WebDevelopment></WebDevelopment>} ></Route>
        <Route path="/ecommerce" element={<Ecommerce></Ecommerce>} ></Route>
        <Route path="/contactus" element={<Contactpage></Contactpage>} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Routerpage;
