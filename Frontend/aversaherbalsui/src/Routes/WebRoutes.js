<<<<<<< HEAD
import React from "react";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import { Route, Routes } from "react-router-dom";
import WebsiteHomepage from "../Container/WebsiteHomepage/WebsiteHomepage";
import WebsiteHomepageNew from "../Container/WebsiteHomepage/WebsiteHomepageNew";
import ProductPage from "../Components/ProductPage/ProductPage";
import WellnessResources from "../Container/WebsiteWellnessResourcePage/WellnessResources";
import BusinessOportunity from "../Container/WebsiteBusinessOpportunity/BusinessOportunity";
import About from "../Container/WebsiteAbout/About";
=======
import React from 'react'
import AppNavbar from '../Components/AppNavbar/AppNavbar'
import { Route, Routes } from 'react-router-dom'
import WebsiteHomepage from '../Container/WebsiteHomepage/WebsiteHomepage'
import WebsiteHomepageNew from '../Container/WebsiteHomepage/WebsiteHomepageNew'
import About from "../Container/WebsiteAbout/About"
import Contact from "../Container/WebsiteContact/Contact"
>>>>>>> 9461787c06cd469e2ec0bdf0936399af80c555d2

const WebRoutes = () => {
  return (
    <div>
<<<<<<< HEAD
      <AppNavbar />
      <Routes>
        {/* <Route path="/*" element=<WebsiteHomepageNew /> /> */}
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/products" element=<ProductPage /> />
        <Route path="/wellnessresources" element=<WellnessResources /> />
        <Route path="/business" element=<BusinessOportunity /> />
        <Route path="/about" element=<About /> />
=======
        <AppNavbar/>
        <Routes>
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        {/* <Route path="/*" element=<WebsiteHomepage /> /> */}
>>>>>>> 9461787c06cd469e2ec0bdf0936399af80c555d2
      </Routes>
    </div>
  );
};

export default WebRoutes;
