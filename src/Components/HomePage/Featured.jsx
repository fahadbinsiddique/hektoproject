import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";
import Slider from "react-slick";
import { ApiDataContext } from "../Others/ContextApi";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const value = useContext(ApiDataContext);

  return (
    <section className="">
      <div className="container mx-auto">
        <h2 className="font-josef font-bold text-[42px] text-[#1A0B5B] pt-36  text-center">
          Featured Products
        </h2>

        <div className="py-8">
          <Slider {...settings}>
            {value.map((item) => (
              <div className="!w-[95%] shadow-md rounded-md group  ">
                <div className="bg-[#F6F7FB] flex justify-center overflow-hidden relative  h-[350px] pt-[40px] pb-[20px]">
                  <img className="  " src={item.thumbnail} alt="" />
                  <button className="absolute -bottom-10 bg-[#08D15F] font-josef font-medium text-[12px] px-7 py-2 rounded-md duration-700 ease-in-out text-white  group-hover:bottom-2 ">
                    View Details
                  </button>
                  <div className="flex gap-5 absolute duration-700 ease-in-out -left-36 group-hover:left-2">
                    <FiShoppingCart className="text-[#2F1AC4] text-[25px]" />
                    <IoIosHeartEmpty className="text-[#1389FF] text-[25px]" />
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
                  <p className="font-Lato font-bold text-[14px] group-hover:text-white text-[#151875] ">
                    $ {item.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Featured;
