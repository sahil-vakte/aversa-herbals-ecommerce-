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

import React from 'react'
// import AppNavbar from '../Components/AppNavbar/AppNavbar'
// import { Route, Routes } from 'react-router-dom'
// import WebsiteHomepage from '../Container/WebsiteHomepage/WebsiteHomepage'
// import WebsiteHomepageNew from '../Container/WebsiteHomepage/WebsiteHomepageNew'
// import About from "../Container/WebsiteAbout/About"
// import Contact from "../Container/WebsiteContact/Contact"
<<<<<<< HEAD
=======
import Contact from "./../Container/WebsiteContact/Contact";
import About from "../Container/WebsiteAbout/About";
>>>>>>> c8718559b1603d041a2ae0ae37431b3f923f7ea2

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
<<<<<<< HEAD
        <Route path="/contact" element=<Contact /> />
        <Route path="/about" element=<About /> />
=======
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
>>>>>>> c8718559b1603d041a2ae0ae37431b3f923f7ea2
      </Routes>
    </div>
  );
};

export default WebRoutes;
