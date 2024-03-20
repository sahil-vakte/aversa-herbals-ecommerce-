import React from "react";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import { Route, Routes } from "react-router-dom";
import WebsiteHomepage from "../Container/WebsiteHomepage/WebsiteHomepage";
import WebsiteHomepageNew from "../Container/WebsiteHomepage/WebsiteHomepageNew";

const WebRoutes = () => {
  return (
    <div>
      <AppNavbar />
      <Routes>
        {/* <Route path="/*" element=<WebsiteHomepageNew /> /> */}
        <Route path="/*" element=<WebsiteHomepage /> />
      </Routes>
    </div>
  );
};

export default WebRoutes;
