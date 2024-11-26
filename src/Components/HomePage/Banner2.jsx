import React from 'react'
import group153 from '../../assets/img/Group 153.png'
import { IoEllipse } from "react-icons/io5";

const Banner2 = () => {
  return (
    <section className='py-36 '>
        <div className='bg-[#F1F0FF]  h-[579]'>
        <div className="container mx-auto ">
            <div className="flex items-center justify-center">
                <div>
                    <img src={group153} alt="" />
                </div>
                <div className=' '>

                    <h2 className='text-[#151875] w-[500px] font-josef font-bold text-[35px] pb-5'>Unique Features Of leatest &
                    Trending Poducts</h2>

                    <div className='space-y-5'>

                    <p className='flex items-center gap-3 font-Lato font-medium text-[16px] text-[#ACABC3]'><IoEllipse className='text-[#F52B70]   ' />All frames constructed with hardwood solids and laminates</p>
                    <p className='flex items-center  gap-3 font-Lato font-medium text-[16px] text-[#ACABC3] '><IoEllipse className='text-[#2B2BF5]   ]' />Reinforced with double wood dowels, glue, screw - nails corner 
                    blocks and machine nails</p>
                    <p className='flex items-center gap-3 font-Lato font-medium text-[16px] text-[#ACABC3] '><IoEllipse className='text-[#2BF5CC] ' />Arms, backs and seats are structurally reinforced</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-6 py-10">
                        <button className='font-josef font-semibold text-[17px] rounded-md py-4 px-8 bg-[#f92a87] text-white'>Add To Cart</button>
                            <div>
                                <p className='text-[#151875] font-josef font-semibold text-[14px]'>B&B Italian Sofa </p>
                                <p className='font-Lato text-[14px] text-[#151875]'>$32.00 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner2
