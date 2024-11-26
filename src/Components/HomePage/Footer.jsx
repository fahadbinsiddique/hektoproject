import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { GrTwitter } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Hekto from '../../assets/img/Hekto.png'




const Footer = () => {
  return (
    <footer>
        <div className=" h-[479px] w-[100%] bg-[#EEEFFB]">
            <div className="container mx-auto">
                <div className="flex py-20 justify-between">
                    <div>
                        <img src={Hekto} className='pb-12' alt="" />
                        <div className='flex bg-white py-1 rounded-lg  justify-between'>
                            <input type="email" name="" placeholder='Enter Email Adress' className='w-[260px] ml-2' id="" />
                            <button className='font-josef font-medium Your  text-[16px] rounded-lg py-2 px-8 bg-[#f92a87] text-white'>Sign Up</button>
                        </div>
                            <p className='text-[#9196AA] font-Lato text-[16px] pt-8'>Contact Info</p>
                            <p className='text-[#9196AA] font-Lato text-[16px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        
                    </div>

                    <div>
                        <h2 className='[#000000] pb-8 font-josef font-semibold text-[22px]'>Catagories</h2>
                        <div className=' space-y-5'>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Laptops & Computers</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Cameras & Photography</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Smart Phones & Tablets</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Video Games & Consoles</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Waterproof Headphones</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='[#000000] pb-8 font-josef font-semibold text-[22px]'>Customer Care</h2>
                        <div className=' space-y-5'>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>My Account</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Discount</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Returns</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Orders History</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Order Tracking</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='[#000000] pb-8 font-josef font-semibold text-[22px]'>Pages</h2>
                        <div className=' space-y-5'>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Blog</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Browse the Shop</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Category</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Pre-Built Pages</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>Visual Composer Elements</p>
                        <p className='font-Lato text-[16px] text-[#8A8FB9]'>WooCommerce Pages</p>
                        </div>
                    </div>


                </div>
            
            </div>
        </div>




        <div className=" h-[53px] w-[100%] bg-[#e7e3f8] flex ">
            <div className="container flex mx-auto justify-evenly items-center gap-36">
                <p className='font-Lato font-semibold text-[16px] text-[#9DA0AE]'>© Fahad Bin Siddique - All Rights Reserved</p>
                <div className="flex gap-5">
                <Link to={'/pages'}> <FaFacebook /> </Link>
                <Link to={'/pages'}> <LuInstagram /> </Link>
                <Link to={'/pages'}> <GrTwitter /> </Link>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
