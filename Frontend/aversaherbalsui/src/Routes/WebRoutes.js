import React from 'react'
import AppNavbar from '../Components/AppNavbar/AppNavbar'
import { Route, Routes } from 'react-router-dom'
import WebsiteHomepage from '../Container/WebsiteHomepage/WebsiteHomepage'

const WebRoutes = () => {
  return (
    <div>
        <AppNavbar/>
        <Routes>
        <Route path="/*" element=<WebsiteHomepage /> />
      </Routes>
    </div>
  )
}

export default WebRoutes