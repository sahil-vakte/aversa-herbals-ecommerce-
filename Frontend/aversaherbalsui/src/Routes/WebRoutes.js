// import React from "react";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import { Route, Routes } from "react-router-dom";
import WebsiteHomepage from "../Container/WebsiteHomepage/WebsiteHomepage";
// import WebsiteHomepageNew from "../Container/WebsiteHomepage/WebsiteHomepageNew";
import ProductPage from "../Components/ProductPage/ProductPage";
import WellnessResources from "../Container/WebsiteWellnessResourcePage/WellnessResources";
import About from "../Container/WebsiteAbout/About";
import Contact from "../Container/WebsiteContact/Contact"
// import BusinessOportunity from "../Container/WebsiteBusinessOpportunity/BusinessOportunity";
// import About from "../Container/WebsiteAbout/About";
import LoginPage from "../Components/LoginPage/loginPage"
import React from 'react'
import RegisterPage from '../Components/RegisterPage/RegisterPage'; // Import your RegisterPage component

// import AppNavbar from '../Components/AppNavbar/AppNavbar'
// import { Route, Routes } from 'react-router-dom'
// import WebsiteHomepage from '../Container/WebsiteHomepage/WebsiteHomepage'
// import WebsiteHomepageNew from '../Container/WebsiteHomepage/WebsiteHomepageNew'
// import About from "../Container/WebsiteAbout/About"
// import Contact from "../Container/WebsiteContact/Contact"
// import Contact from "./../Container/WebsiteContact/Contact";
// import About from "../Container/WebsiteAbout/About";

const WebRoutes = () => {
  return (
    <div>
      HEAD
      <AppNavbar />
      <Routes>
        {/* <Route path="/*" element=<WebsiteHomepageNew /> /> */}
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/products" element=<ProductPage /> />
        <Route path="/wellnessresources" element=<WellnessResources /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/login" element=<LoginPage /> />
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" element=<RegisterPage /> />

      </Routes>
    </div>
  );
};

export default WebRoutes;
