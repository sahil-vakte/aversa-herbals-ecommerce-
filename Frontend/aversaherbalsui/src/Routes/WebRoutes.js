import React from "react";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import { Route, Routes } from "react-router-dom";
import WebsiteHomepage from "../Container/WebsiteHomepage/WebsiteHomepage";
import WebsiteHomepageNew from "../Container/WebsiteHomepage/WebsiteHomepageNew";
import ProductPage from "../Components/ProductPage/ProductPage";
import WellnessResources from "../Container/WebsiteWellnessResourcePage/WellnessResources";
import BusinessOportunity from "../Container/WebsiteBusinessOpportunity/BusinessOportunity";
import About from "../Container/WebsiteAbout/About";

const WebRoutes = () => {
  return (
    <div>
      <AppNavbar />
      <Routes>
        {/* <Route path="/*" element=<WebsiteHomepageNew /> /> */}
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/products" element=<ProductPage /> />
        <Route path="/wellnessresources" element=<WellnessResources /> />
        <Route path="/business" element=<BusinessOportunity /> />
        <Route path="/about" element=<About /> />
      </Routes>
    </div>
  );
};

export default WebRoutes;
