import React from "react";
import latest1 from "../../assets/img/JIUjvqe2ZHg.png";
import latest2 from "../../assets/img/2dcYhvbHV-M.png";
import latest3 from "../../assets/img/2dcYhvbHV-Me.png";
import { FaPenNib } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const LatestBlog = () => {
  return (
    <section>
      <div className="container mx-auto pt-8">
        <h2 className="font-josef font-bold text-center text-[42px] text-[#151875]">
          Leatest Blog
        </h2>

        <div className="flex justify-between  bg-[#fefeff] pb-36 pt-24 ">

          <div className=" w-[31%] shadow-md  rounded-md h-[500px]  ">
            
            <div className="h-[255px]   flex justify-center">
              <img src={latest1} alt="" className="w-[100%] rounded-xl" />
            </div>

            <div className="p-5">
              <div className="flex gap-8 pb-6">
                <p className="font-josef text-[14px] text-[#151875] flex items-center  gap-2">
                  <FaPenNib className=" text-[#FB2E86]" /> SaberAli
                </p>

                <p className="font-josef text-[14px] text-[#151875] flex items-baseline gap-2">
                  <FaCalendarAlt className=" text-[#FFA454]" />
                  21 August,2020
                </p>
              </div>

              <h3 className="font-josef font-bold pb-2 text-[18px] text-[#151875]">
                Top esssential Trends in 2021
              </h3>

              <p className="font-lato pb-5 text-[16px] w-[340px] leading-8 text-[#72718F]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>

              <a
                href="/about"
                className="font-lato font-semibold underline text-[16px] text-[#151875]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className=" w-[31%] shadow-md  rounded-md h-[500px] ">
            <div className="h-[255px]   flex justify-center">
              <img src={latest2} alt="" className="w-[100%] rounded-xl" />
            </div>

            <div className="p-5">
              <div className="flex gap-8 pb-6">
                <p className="font-josef text-[14px] text-[#151875] flex items-center  gap-2">
                  <FaPenNib className=" text-[#FB2E86]" /> SaberAli
                </p>

                <p className="font-josef text-[14px] text-[#151875] flex items-baseline gap-2">
                  <FaCalendarAlt className=" text-[#FFA454]" />
                  21 August,2020
                </p>
              </div>

              <h3 className="font-josef font-bold pb-2 text-[18px] text-[#FB2E86]">
                Top esssential Trends in 2021
              </h3>

              <p className="font-lato pb-5 text-[16px] w-[340px] leading-8 text-[#72718F]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>

              <a
                href="/about"
                className="font-lato font-semibold underline text-[16px] text-[#FB2E86]"
              >
                Read More
              </a>
            </div>
          </div>

          <div className=" w-[31%] shadow-md  rounded-md h-[500px] ">
            <div className="h-[255px]   flex justify-center">
              <img src={latest3} alt="" className="w-[100%] rounded-xl" />
            </div>

            <div className="p-5">
              <div className="flex gap-8 pb-6">
                <p className="font-josef text-[14px] text-[#151875] flex items-center  gap-2">
                  <FaPenNib className=" text-[#FB2E86]" /> SaberAli
                </p>

                <p className="font-josef text-[14px] text-[#151875] flex items-baseline gap-2">
                  <FaCalendarAlt className=" text-[#FFA454]" />
                  21 August,2020
                </p>
              </div>

              <h3 className="font-josef font-bold pb-2 text-[18px] text-[#151875]">
                Top esssential Trends in 2021
              </h3>

              <p className="font-lato pb-5 text-[16px] w-[340px] leading-8 text-[#72718F]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>

              <a
                href="/about"
                className="font-lato font-semibold underline text-[16px] text-[#151875]"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
