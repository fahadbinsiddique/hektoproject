import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

const Header = () => {
  
  const cartData = useSelector((state) => state.cartItemManager.cartItems);
  
  
  const countNumber=cartData.map((item)=>item.qty)
  const totalCountNumber= countNumber.reduce((currentvalue,total) => currentvalue+total,0)
   
    
  return (
    <header className="bg-[#7E33E0]">
      <div className="container mx-auto py-3 ">
        <div className="flex justify-between ">
          <div className="flex  gap-7">
            <div className="flex items-center text-[#F1F1F1] gap-3 ">
              <MdOutlineEmail />
              <h3 className="font-josef text-[16px] font-semibold">
                mhhasanul@gmail.com
              </h3>
            </div>

            <div className="flex items-center text-[#F1F1F1] gap-3">
              <TbPhoneCall />
              <h3 className="text-[16px] font-semibold font-josef">
                (12345)67890
              </h3>
            </div>
          </div>

          <div className=""  >
            <ul className="flex font-josef text-[16px] font-semibold gap-6">
              <li>
                <select className="bg-transparent text-[#F1F1F1]" name="" id="">
                  <option className="text-gray-500" value="">English</option>
                  <option className="text-gray-500" value="">Bangla</option>
                </select>
              </li>
              <li>
                <select className="bg-transparent text-[#F1F1F1]" name="" id="">
                  <option className="text-gray-500" value="">USD</option>
                  <option className="text-gray-500" value="">BDT</option>
                </select>
              </li>
              <Link to={'/signin'}><li className="flex items-center gap-1 text-[#F1F1F1] ">Login < CiUser /></li></Link>

              <li className="flex items-center gap-1 text-[#F1F1F1]">Wishlist <CiHeart /> </li>
              
              <li className="flex relative items-center  ">
                <Link to='/cart'><LuShoppingCart className="text-[20px] text-[#F1F1F1]" /></Link> 
                <span className={`absolute  -top-2 -right-2 h-5 w-5 justify-center items-center bg-pink-500 rounded-full text-white text-center ${cartData.length ===0? 'hidden':''}`}>{ totalCountNumber}</span>
              </li>

            </ul>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
