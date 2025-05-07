import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Hompage/Homepage";
import AboutPage from "../Pages/Aboutpage/AboutPage";

function Routerpage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/aboutus" element={<AboutPage></AboutPage>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Routerpage;
