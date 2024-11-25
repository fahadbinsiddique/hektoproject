import React from 'react'
import Header from '../Components/HomePage/Header'
import Navbar from '../Components/HomePage/Navbar'
import Banner from '../Components/HomePage/Banner'
import Featured from '../Components/HomePage/Featured'
import LatestProduct from '../Components/HomePage/LatestProduct'

const Home = () => {
  return (
    <>
      <Banner/>
      <Featured/>
      <LatestProduct/>
    </>
  )
}

export default Home
