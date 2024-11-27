import React from "react";
import { IoEllipse } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import tortuga from '../../assets/img/tortuga-01-b 1.png'
import ReUsableOne from "../Others/ReUsableOne";

const DiscountItem = () => {
  return (
    <section>
      <div className="container mx-auto ">




        {/* <h1 className="font-josef font-bold text-center text-[42px]  pb-5 text-[#151875]">
          Discount Item
        </h1>
        <div className="flex className='font-lato gap-8 justify-center   text-[18px] '">
          <p className="text-[#FB2E86] underline flex items-baseline font-semibold gap-2">
            Wood Chair <IoEllipse className="text-[8px]" />
          </p>
          <p className="text-[#151875] font-semibold">Plastic Chair</p>
          <p className="text-[#151875] font-semibold">Sofa Colletion</p>
        </div> */}


        <ReUsableOne 
        heading='Discount Item'
        catergoryName1='Wood Chair'
        catergoryName2='Plastic Chair'
        catergoryName3='Sofa Colletion'
          />

        <div className="flex  justify-center  items-center  h-[597px]">

          <div className="  ">
            <h1 className="font-josef font-bold pb-3  text-[35px] text-[#151875]">
              20% Discount Of All Products
            </h1>
            <p className="font-josef text-[21px] pt-2 pb-5 text-[#FB2E86]">
              Eams Sofa Compact
            </p>
            <p className="font-lato leading-8 tracking-widest pb-4 w-[600px] text-[17px] text-[#B7BACB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <div className="flex  pb-14 justify-between">
                <div className="space-y-4">
                    <p className='font-lato tracking-widest  text-[16px] text-[#B8B8DC] flex items-center gap-2'><SiTicktick />Material expose like metals</p>
                    <p className='font-lato tracking-widest  text-[16px] text-[#B8B8DC] flex items-center gap-2'><SiTicktick />Simple neutral colours.</p>
                </div>

                <div className="space-y-4">
                    <p className='font-lato tracking-widest  text-[16px] text-[#B8B8DC] flex items-center gap-2'><SiTicktick />Clear lines and geomatric figures</p>
                    <p className='font-lato tracking-widest  text-[16px] text-[#B8B8DC] flex items-center gap-2'><SiTicktick />Material expose like metals</p>
                </div>
            </div>


            <button className='font-josef font-semibold text-[17px] rounded-md py-4 px-14 bg-[#f92a87] text-white'>Shop Now</button>

          </div>

            <div>
                <img src={tortuga}  alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
