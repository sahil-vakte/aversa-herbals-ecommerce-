import React from 'react'
import AppNavbar from '../Components/AppNavbar/AppNavbar'
import { Route, Routes } from 'react-router-dom'
import WebsiteHomepage from '../Container/WebsiteHomepage/WebsiteHomepage'
import WebsiteHomepageNew from '../Container/WebsiteHomepage/WebsiteHomepageNew'
import About from "../Container/WebsiteAbout/About"
import Contact from "../Container/WebsiteContact/Contact"

const WebRoutes = () => {
  return (
    <div>
        <AppNavbar/>
        <Routes>
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        {/* <Route path="/*" element=<WebsiteHomepage /> /> */}
      </Routes>
    </div>
  );
};

export default WebRoutes;
