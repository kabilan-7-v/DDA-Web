import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Hompage/Homepage";
import AboutPage from "../Pages/Aboutpage/AboutPage";
import Phoneverfications from "../firebase/Phoneverfications";

function Routerpage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/aboutus" element={<AboutPage></AboutPage>}></Route>
        <Route path="/verify" element={<Phoneverfications></Phoneverfications>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default Routerpage;
