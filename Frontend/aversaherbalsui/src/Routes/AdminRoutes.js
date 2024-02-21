import React from 'react'
import AddProducts from '../Container/WebAdminFunctions/AddProducts/AddProducts'
import { Route, Routes } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <Routes>
    <Route path="/" element=<AddProducts /> />
  </Routes>
  )
}

export default AdminRoutes