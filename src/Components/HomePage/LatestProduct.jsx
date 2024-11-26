import React, { useContext } from 'react'
import { ApiDataContext } from '../ContextApi'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";

const LatestProduct = () => {
  const value = useContext(ApiDataContext);
  return (
    <section>
        <div className="container mx-auto">

            <div className='pt-28'>
                <h2 className='text-center font-josef font-bold text-[42px] py-5 '>Latest Product</h2>
                <div className="flex justify-center py-6 space-x-24 text-[#151875]  font-Lato text-[18px]">
                    <h2 >New Arrival</h2>
                    <h2 >Best Seller</h2>
                    <h2 >Featured</h2>
                    <h2 >Special Offer</h2>
                </div>
            </div>


            <div className="flex flex-wrap justify-between space-y-8">

            {value.map((item)=>(
              

<div className="w-[30%] shadow-md rounded-md group  ">
<div className="bg-[#F6F7FB] flex justify-center overflow-hidden relative  h-[350px] pt-[40px] pb-[20px]">
  <img className="  " src={item.thumbnail} alt="" />
  <button className="absolute -bottom-10 bg-[#08D15F] font-josef font-medium text-[12px] px-7 py-2 rounded-md duration-700 ease-in-out text-white group-hover:bottom-2 ">
    View Details
  </button>
  <div className="flex gap-5 absolute duration-700 ease-in-out -left-36 group-hover:left-2">
    < FiShoppingCart className="text-[#2F1AC4] text-[25px]" />
    <IoIosHeartEmpty className="text-[#1389FF] text-[25px]"/>
    <BsZoomIn className="text-[#1389FF] text-[25px]" />
  </div>
</div>
<div className="bg-[#ffffff] text-center py-8 space-y-3 group-hover:bg-[#2F1AC4] rounded-md">
  <h3 className="font-Lato group-hover:text-white font-bold text-[18px] text-[#FB2E86]">
    {item.title}
  </h3>
  <p className="text-[#151875] group-hover:text-white font-josef text-[14px] ">
    In Stock: {item.stock}
  </p>
  <p className="font-Lato text-[14px] group-hover:text-white text-[#151875] ">
    $ {item.price}
  </p>
</div>
</div>

      ))}
            </div>
        </div>
    </section>
  )
}

export default LatestProduct
