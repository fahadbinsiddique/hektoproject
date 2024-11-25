import { useState } from 'react'
import './App.css'
import Home from './PAGES/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Pages from './PAGES/Pages'
import Products from './PAGES/Products'
import Blog from './PAGES/Blog'
import Shop from './PAGES/Shop'
import Contact from './PAGES/Contact'
import Layout from './Components/Layout';

function App() {
  const domain = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>

      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Route>
  ))

  return (
    <>
      <RouterProvider router={domain}/>
    </>
  )
}

export default App
