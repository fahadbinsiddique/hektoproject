import React from "react";
import boximage from "../../assets/img/box for image.png";
import image1170png from "../../assets/img/image 1170.png";
import image31png from "../../assets/img/image 31.png";
import image321png from "../../assets/img/image 321.png";
import image1162png from "../../assets/img/image 1162.png";
import image1161png from "../../assets/img/image 1161.png";
import image30png from "../../assets/img/image 30.png";


const TreandingProducts = () => {
  return (
    <section>
      <div className="container mx-auto pb-16 ">
        <h2 className="font-josef font-bold  text-[#151875] pb-12 text-[42px] text-center">
          Trending Products
        </h2>
        <div className="flex justify-between">
          <div className="h-[350px] border-[10px] shadow-2xl border-white bg-white w-[22%]">
            <div className="bg-[#F5F6F8] flex justify-center h-[244px]">
              <img src={boximage} alt="" />
            </div>
            <div className="  pt-3">
              <h2 className="text-[20px] font-Lato font-bold text-[#151875] text-center">
                Cantilever chair
              </h2>
            </div>
            <div className="flex gap-2 justify-center items-center pt-1">
              <p className="text-[16px] font-josef text-[#151875]">$26.00 </p>
              <p className="text-[12px] font-josef text-gray-400 line-through">
                $42.00
              </p>
            </div>
          </div>
          <div className="h-[350px] border-[10px] shadow-2xl border-white bg-white w-[22%]">
            <div className="bg-[#F5F6F8] flex justify-center h-[244px]">
              <img src={image1170png} alt="" />
            </div>
            <div className="  pt-3">
              <h2 className="text-[20px] font-Lato font-bold text-[#151875] text-center">
                Cantilever chair
              </h2>
            </div>
            <div className="flex gap-2 justify-center items-center pt-1">
              <p className="text-[16px] font-josef text-[#151875]">$26.00 </p>
              <p className="text-[12px] font-josef text-gray-400 line-through">
                $42.00
              </p>
            </div>
          </div>
          <div className="h-[350px] border-[10px] shadow-2xl border-white bg-white w-[22%]">
            <div className="bg-[#F5F6F8] flex justify-center h-[244px]">
              <img src={image31png} alt="" />
            </div>
            <div className="  pt-3">
              <h2 className="text-[20px] font-Lato font-bold text-[#151875] text-center">
                Cantilever chair
              </h2>
            </div>
            <div className="flex gap-2 justify-center items-center pt-1">
              <p className="text-[16px] font-josef text-[#151875]">$26.00 </p>
              <p className="text-[12px] font-josef text-gray-400 line-through">
                $42.00
              </p>
            </div>
          </div>
          <div className="h-[350px] border-[10px] shadow-2xl border-white bg-white w-[22%]">
            <div className="bg-[#F5F6F8] flex justify-center h-[244px]">
              <img src={image321png} alt="" />
            </div>
            <div className="  pt-3">
              <h2 className="text-[20px] font-Lato font-bold text-[#151875] text-center">
                Cantilever chair
              </h2>
            </div>
            <div className="flex gap-2 justify-center items-center pt-1">
              <p className="text-[16px] font-josef text-[#151875]">$26.00 </p>
              <p className="text-[12px] font-josef text-gray-400 line-through">
                $42.00
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto  pb-32  ">
        <div className="flex   justify-between">

            <div className="w-[32%] h-[270px] bg-[#fff6fb] relative">
                <div className="p-6  ">
                <h1 className="text-[26px] pb-4 font-semibold font-josef text-[#151875]">23% off in all products</h1>
                <a href="/shop" className="font-Lato  underline font-semibold text-[16px] text-[#FB2E86]">Shop Now</a>
                </div>
                <img src={image1162png} alt="" className="absolute left-[185px] top-[70px]"/>
            </div>

            <div className="h-[270px] w-[32%] bg-[#EEEFFB] relative">
            <div className="p-6  ">
                <h1 className="text-[26px] pb-4 font-semibold font-josef text-[#151875]">23% off in all products</h1>
                <a href="/shop" className="font-Lato  underline font-semibold text-[16px] text-[#FB2E86]">View Collection</a>
            </div>
            <img src={image1161png} alt="" className="absolute left-[100px] top-[100px]"/>
            </div>

            <div className="h-[270px] w-[32%]  flex flex-col justify-between  ">

                <div className="  h-[80px]  flex gap-5  items-center">
                        <div className="bg-[#f5f6f8] h-[80px] w-[150px] flex justify-center items-center">
                            <img src={image30png} alt="" />
                        </div>
                        <div className="">
                            <h2 className="text-[20px]  text-[#151875] font-semibold font-josef">Executive Seat chair</h2>
                            <p className="text-[16px] text-[#151875] line-through font-josef">$32.00</p>
                        </div>
                </div>
                <div className="  h-[80px] -[270px] flex gap-5  items-center">
                        <div className="bg-[#f5f6f8] h-[80px] w-[150px] flex justify-center items-center">
                            <img src={image30png} alt="" />
                        </div>
                        <div className="">
                            <h2 className="text-[20px]  text-[#151875] font-semibold font-josef">Executive Seat chair</h2>
                            <p className="text-[16px] text-[#151875] line-through font-josef">$32.00</p>
                        </div>
                </div>
                <div className="  h-[80px] -[270px] flex gap-5  items-center">
                        <div className="bg-[#f5f6f8] h-[80px] w-[150px] flex justify-center items-center">
                            <img src={image30png} alt="" />
                        </div>
                        <div className="">
                            <h2 className="text-[20px]  text-[#151875] font-semibold font-josef">Executive Seat chair</h2>
                            <p className="text-[16px] text-[#151875] line-through font-josef">$32.00</p>
                        </div>
                </div>
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default TreandingProducts;
