import React from 'react'
import Header from '../Components/HomePage/Header'
import Navbar from '../Components/HomePage/Navbar'
import Banner from '../Components/HomePage/Banner'
import Featured from '../Components/HomePage/Featured'
import LatestProduct from '../Components/HomePage/LatestProduct'
import ShopexOffer from '../Components/HomePage/ShopexOffer'
import Banner2 from '../Components/HomePage/Banner2'
import TreandingProducts from '../Components/HomePage/TreandingProducts'
import DiscountItem from '../Components/HomePage/DiscountItem'

const Home = () => {
  return (
    <>
      <Banner/>
      <Featured/>
      <LatestProduct/>
      <ShopexOffer/>
      <Banner2/>
      <TreandingProducts/>
      <DiscountItem/>
    </>
  )
}

export default Home
