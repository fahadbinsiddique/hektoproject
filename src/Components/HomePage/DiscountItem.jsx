import React from "react";
import { IoEllipse } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import tortuga from "../../assets/img/Grosdfsdafup 154.png";
import ReUsableOne from "../Others/ReUsableOne";

const DiscountItem = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* ReUsable Component */}
        <ReUsableOne 
          heading="Discount Item"
          catergoryName1="Wood Chair"
          catergoryName2="Plastic Chair"
          catergoryName3="Sofa Collection"
          
        />

        {/* Main Section */}
        <div className="flex flex-col pt-12 lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-16 h-auto lg:h-[597px]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-josef font-bold pb-3 text-[28px] md:text-[30px] lg:text-[35px] text-[#151875]">
              20% Discount On All Products
            </h1>
            <p className="font-josef text-[18px] md:text-[20px] lg:text-[21px] pt-2 pb-5 text-[#FB2E86]">
              Eams Sofa Compact
            </p>
            <p className="font-lato leading-6 md:leading-8 tracking-wide lg:tracking-widest pb-4 text-[14px] md:text-[16px] lg:text-[17px] text-[#B7BACB] max-w-[600px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Features Section */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 lg:gap-10 pb-10 lg:pb-14">
              <div className="space-y-4">
                <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                  <SiTicktick className="text-[#151875]" />
                  Material expose like metals
                </p>
                <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                  <SiTicktick className="text-[#151875]" />
                  Simple neutral colours.
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                  <SiTicktick className="text-[#151875]" />
                  Clear lines and geometric figures
                </p>
                <p className="font-lato tracking-wide text-[14px] md:text-[16px] text-[#B8B8DC] flex items-center gap-2">
                  <SiTicktick className="text-[#151875]" />
                  Material expose like metals
                </p>
              </div>
            </div>

            {/* Shop Button */}
            <button className="font-josef justify-center items-center text-center font-semibold text-[15px] md:text-[17px] rounded-md py-4 px-10 md:px-14 bg-[#f92a87] text-white">
              Shop Now
            </button>
            
          {/* Right Image */}
          <div className="flex justify-center pb-6 ">
            <img
              src={tortuga}
              alt="Discount Item"
              className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            />
          </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
