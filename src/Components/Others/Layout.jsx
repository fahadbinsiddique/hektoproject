import React from 'react'
import Header from '../HomePage/Header'
import Navbar from '../HomePage/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../HomePage/Footer'

const Layout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
