import React from 'react'
import logo from '../../assets/img/Hekto.png'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
    <nav>
      <div className="container  mx-auto">

        <div className="flex  justify-between py-6 ">

          <div className="flex   justify-between items-end  gap-[160px] ">
            <div className="flex ">
              <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <div className="justify-between ">
              <ul className='flex gap-16 font-Lato   text-[16px] font-semibold'>

                <li className='group relative'><Link to={'/'} className='flex items-center group-hover:text-[#f92a87] '>Home<FaAngleDown className='text-gray-600 group-hover:text-[#f92a87]' / ></Link>
                  <ul className='hidden   top-5 py-6 space-y-4 left-0 absolute group-hover:block   '>
                    <li>Page 1</li>
                    <li>Page 2</li>
                    <li>Page 3</li>
                    <li>Page 4</li>
                  </ul>
                </li>
                <li><Link to={'/pages'}>Pages</Link></li>
                <li><Link to={'/products'}>Products</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
                <li><Link to={'/shop'}>Shop</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>

              </ul>
            </div>
          </div>

          <div className="  flex items-center">

            <input placeholder='search your product' type="search" className='border px-8 py-2' />

            <div className='bg-[#FB2E86] py-[9px] r px-3 '><IoSearch className='text-white text-2xl' /></div>
          </div>
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar
