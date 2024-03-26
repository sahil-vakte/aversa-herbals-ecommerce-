<<<<<<< HEAD
import React from 'react'
import AppNavbar from '../Components/AppNavbar/AppNavbar'
import { Route, Routes } from 'react-router-dom'
import WebsiteHomepage from '../Container/WebsiteHomepage/WebsiteHomepage'
import WebsiteHomepageNew from '../Container/WebsiteHomepage/WebsiteHomepageNew'
import About from "../Container/WebsiteAbout/About"
import Contact from "../Container/WebsiteContact/Contact"
=======
// import React from "react";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import { Route, Routes } from "react-router-dom";
import WebsiteHomepage from "../Container/WebsiteHomepage/WebsiteHomepage";
// import WebsiteHomepageNew from "../Container/WebsiteHomepage/WebsiteHomepageNew";
import ProductPage from "../Components/ProductPage/ProductPage";
import WellnessResources from "../Container/WebsiteWellnessResourcePage/WellnessResources";
// import BusinessOportunity from "../Container/WebsiteBusinessOpportunity/BusinessOportunity";
// import About from "../Container/WebsiteAbout/About";

// import React from 'react'
// import AppNavbar from '../Components/AppNavbar/AppNavbar'
// import { Route, Routes } from 'react-router-dom'
// import WebsiteHomepage from '../Container/WebsiteHomepage/WebsiteHomepage'
// import WebsiteHomepageNew from '../Container/WebsiteHomepage/WebsiteHomepageNew'
// import About from "../Container/WebsiteAbout/About"
// import Contact from "../Container/WebsiteContact/Contact"
>>>>>>> 4edd9e1dda2e579ff53c0356e60c037adec7ed30

const WebRoutes = () => {
  return (
    <div>
<<<<<<< HEAD
        <AppNavbar/>
        <Routes>
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        {/* <Route path="/*" element=<WebsiteHomepage /> /> */}
=======
      HEAD
      <AppNavbar />
      <Routes>
        {/* <Route path="/*" element=<WebsiteHomepageNew /> /> */}
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/products" element=<ProductPage /> />
        <Route path="/wellnessresources" element=<WellnessResources /> />
        {/* <Route path="/business" element=<BusinessOportunity /> />
        <Route path="/about" element=<About /> /> */}
>>>>>>> 4edd9e1dda2e579ff53c0356e60c037adec7ed30
      </Routes>
    </div>
  );
};

export default WebRoutes;
