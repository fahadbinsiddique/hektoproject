import React, { useState } from "react";
import logo from "../../assets/img/Hekto.png";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";




const Navbar = () => {


  let [menuShow, setMenuShow] = useState(false)
 
  
  const handleMenu = () => {
    setMenuShow(!menuShow)

  }


  return (
    <>
      <nav>
        <div className="container  mx-auto">
          <div className="flex lg:items-center items-center  gap-4 lg:justify-between py-6 ">
            <div className=" lg:flex   justify-between items-end   gap-[160px] ">

              <div className="lg:flex  hover:scale-110   ">
                
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>

              <div className="justify-between  ">
                <ul className={`lg:flex  lg:gap-16 lg:static   ${menuShow == true ? ' absolute top-28 left-5 ease-in-out duration-700 bg-slate-300 ' : ' absolute -left-28 top-28 '} font-Lato   text-[16px] font-semibold  `}>
                  
                  <li className="group relative">
                    <Link
                      to={"/"}
                      className="flex items-center hover:underline underline-offset-4 group-hover:text-[#f92a87] "
                    >
                      Home
                      <FaAngleDown className="text-gray-600 group-hover:text-[#f92a87]" />
                    </Link>
                    <ul className="hidden   top-5 py-6  left-0 absolute group-hover:block ">
                      <Link to={'/404-not-found'} className=" hover:underline  hover:text-[#f92a87] "><li>Page 1</li></Link>
                      <Link to={'/404-not-found'} className=" hover:underline  hover:text-[#f92a87] py-2"><li>Page 2</li></Link>
                      <Link to={'/404-not-found'} className=" hover:underline  hover:text-[#f92a87] py-2"><li>Page 3</li></Link>
                      <Link to={'/404-not-found'} className=" hover:underline  hover:text-[#f92a87] py-2"><li>Page 4</li></Link>
                      
                      
                    </ul>
                  </li>
                  <li className="hover:text-[#f92a87] hover:underline underline-offset-4">
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li className="hover:text-[#f92a87] hover:underline underline-offset-4">
                    <Link to={"/products"}>Products</Link>
                  </li>
                  <li className="hover:text-[#f92a87] hover:underline underline-offset-4">
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li className="hover:text-[#f92a87] hover:underline underline-offset-4">
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                  <li className="hover:text-[#f92a87] hover:underline underline-offset-4">
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>

            </div>

            <div className="  flex items-center">
              <input
                placeholder="search your product"
                type="search"
                className="border-2 lg:px-8 -px-20   lg:py-2"
              />

              <div className="bg-[#FB2E86] lg:py-[9px] py-[1px]  lg:px-2 ">
                <IoSearch className="text-white text-2xl" />
              </div>


            </div>

              <div onClick={handleMenu} className="lg:hidden cursor-pointer ">
                { menuShow == true ?   <RxCross2 /> : <SlMenu />

                }
              
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
