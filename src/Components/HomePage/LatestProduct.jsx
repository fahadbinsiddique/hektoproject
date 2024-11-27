import React from "react";
import ReUsableOne from "../Others/ReUsableOne";
import image1166png from "../../assets/img/image 1166.png";
import image1168png from "../../assets/img/image 1168.png";
import image15png from "../../assets/img/image 15.png";
import Sale1png from "../../assets/img/Sale1.png";
import image23png from "../../assets/img/image 23.png";
import image321png from "../../assets/img/image 32(1).png";
import image31png from "../../assets/img/image 3(1).png";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";

const LatestProduct = () => {
  return (
    <section>
      <div className="container mx-auto pt-16">
        <ReUsableOne
          heading="Leatest Products"
          catergoryName1="New Arrival"
          catergoryName2="Best Seller"
          catergoryName3="Featured"
          catergoryName4="Special Offer"
        />
        <div className="space-y-6">

          <div className="flex justify-between py-16 ">

            <div className="w-[450px] h-[306px] group shadow-sm overflow-hidden relative ">
              <div className="absolute h-[] w-[50%] top-[-60px] left-[-170px] duration-700 ease-in-out group-hover:left-[-35px]">
                <img src={Sale1png} alt="" />
              </div>
              <div className="w-[450px] h-[270px]  flex items-center justify-center group-hover:bg-white  bg-[#F7F7F7]">
                <img src={image1166png} alt="" />
              </div>
              
              
              <div className="flex h-[36px] justify-between   ">
                <div className="flex items-end ">
                  <h1 className="font-josef text-[18px]  text-[#151875]">
                    Comfort Handy Craft
                  </h1>
                </div>
                <div className="flex items-end  gap-2">
                  <h1 className="font-josef text-[16px] text-[#151875]">
                    $42.00
                  </h1>
                  <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                    $65.00
                  </h1>
                </div>
                <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                </div>

                
                
                
              </div>
              
            </div>


            <div className="w-[450px] h-[306px] group shadow-sm overflow-hidden relative ">
            <div className="absolute h-[] w-[50%] top-[-60px] left-[-170px] duration-700 ease-in-out group-hover:left-[-35px]">
                <img src={Sale1png} alt="" />
              </div>
              <div className="w-[450px] h-[270px]  flex items-center  justify-center   bg-[#F7F7F7] group-hover:bg-white">
                <img src={image15png} alt="" />
              </div>
              <div className="flex h-[36px] justify-between   ">
                <div className="flex items-end ">
                  <h1 className="font-josef text-[18px]  text-[#151875]">
                    Comfort Handy Craft
                  </h1>
                </div>
                <div className="flex items-end  gap-2">
                  <h1 className="font-josef text-[16px] text-[#151875]">
                    $42.00
                  </h1>
                  <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                    $65.00
                  </h1>
                </div>
                <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                </div>
              </div>
            </div>


            <div className="w-[450px] h-[306px] group shadow-sm overflow-hidden relative ">
            <div className="absolute h-[] w-[50%] top-[-60px] left-[-170px] duration-700 ease-in-out group-hover:left-[-35px]">
                <img src={Sale1png} alt="" />
              </div>
              <div className="w-[450px] h-[270px] flex justify-center items-center   bg-[#F7F7F7] group-hover:bg-white">
                <img src={image1168png} alt="" />
              </div>
              <div className="flex h-[36px] justify-between   ">
                <div className="flex items-end ">
                  <h1 className="font-josef text-[18px]  text-[#151875]">
                    Comfort Handy Craft
                  </h1>
                </div>
                <div className="flex items-end  gap-2">
                  <h1 className="font-josef text-[16px] text-[#151875]">
                    $42.00
                  </h1>
                  <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                    $65.00
                  </h1>
                </div>
                <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-between py-16 ">

            <div className="w-[450px] h-[306px] group shadow-sm overflow-hidden relative ">
              <div className="absolute h-[] w-[50%] top-[-60px] left-[-170px] duration-700 ease-in-out group-hover:left-[-35px]">
                <img src={Sale1png} alt="" />
              </div>
              <div className="w-[450px] h-[270px]  flex items-center justify-center group-hover:bg-white  bg-[#F7F7F7]">
                <img src={image23png} alt="" />
              </div>
              
              
              <div className="flex h-[36px] justify-between   ">
                <div className="flex items-end ">
                  <h1 className="font-josef text-[18px]  text-[#151875]">
                    Comfort Handy Craft
                  </h1>
                </div>
                <div className="flex items-end  gap-2">
                  <h1 className="font-josef text-[16px] text-[#151875]">
                    $42.00
                  </h1>
                  <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                    $65.00
                  </h1>
                </div>
                <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                </div>

                
                
                
              </div>
              
            </div>


            <div className="w-[450px] h-[306px] group shadow-sm overflow-hidden relative ">
            <div className="absolute h-[] w-[50%] top-[-60px] left-[-170px] duration-700 ease-in-out group-hover:left-[-35px]">
                <img src={Sale1png} alt="" />
              </div>
              <div className="w-[450px] h-[270px]  flex items-center  justify-center   bg-[#F7F7F7] group-hover:bg-white">
                <img src={image321png} alt="" />
              </div>
              <div className="flex h-[36px] justify-between   ">
                <div className="flex items-end ">
                  <h1 className="font-josef text-[18px]  text-[#151875]">
                    Comfort Handy Craft
                  </h1>
                </div>
                <div className="flex items-end  gap-2">
                  <h1 className="font-josef text-[16px] text-[#151875]">
                    $42.00
                  </h1>
                  <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                    $65.00
                  </h1>
                </div>
                <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                </div>
              </div>
            </div>


            <div className="w-[450px] h-[306px] group shadow-sm overflow-hidden relative ">
            <div className="absolute h-[] w-[50%] top-[-60px] left-[-170px] duration-700 ease-in-out group-hover:left-[-35px]">
                <img src={Sale1png} alt="" />
              </div>
              <div className="w-[450px] h-[270px] flex justify-center items-center   bg-[#F7F7F7] group-hover:bg-white">
                <img src={image31png} alt="" />
              </div>
              <div className="flex h-[36px] justify-between   ">
                <div className="flex items-end ">
                  <h1 className="font-josef text-[18px]  text-[#151875]">
                    Comfort Handy Craft
                  </h1>
                </div>
                <div className="flex items-end  gap-2">
                  <h1 className="font-josef text-[16px] text-[#151875]">
                    $42.00
                  </h1>
                  <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                    $65.00
                  </h1>
                </div>
                <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                    <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                    <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
