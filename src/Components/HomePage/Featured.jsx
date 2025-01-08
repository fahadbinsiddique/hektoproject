import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";
import Slider from "react-slick";
import { ApiDataContext } from "../Others/ContextApi";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
  const settings = {
    dots: false, // Pagination dots
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Medium screens (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (mobile landscape)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, // Extra small screens (mobile portrait)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const value = useContext(ApiDataContext);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-josef font-bold text-[32px] md:text-[42px] text-[#1A0B5B] text-center">
          Featured Products
        </h2>

        <div className="py-8">
          <Slider {...settings}>
            {value?.map((item) => (
              <div
                key={item.id}
                className="shadow-lg rounded-lg group hover:scale-105 transition-transform duration-300"
              >
                {/* Product Image */}
                <div className="bg-[#F6F7FB] flex justify-center items-center overflow-hidden relative h-[250px] md:h-[300px] lg:h-[350px] rounded-t-lg">
                  <img
                    className="object-contain max-h-full w-full"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <Link to={`/shop/details/${item.id}`}></Link>
                  <button className="absolute -bottom-10 bg-[#08D15F] font-josef font-medium text-[12px] px-6 py-2 rounded-md transition-all ease-in-out duration-500 text-white group-hover:bottom-4">
                    View Details
                  </button>

                  {/* Icons */}
                  <div className="flex gap-4 absolute left-4 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiShoppingCart className="text-[#2F1AC4] text-[20px] cursor-pointer" />
                    <IoIosHeartEmpty className="text-[#1389FF] text-[20px] cursor-pointer" />
                    <BsZoomIn className="text-[#1389FF] text-[20px] cursor-pointer" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="bg-white text-center py-4 space-y-2 group-hover:bg-[#2F1AC4] rounded-b-lg">
                  <h3 className="font-Lato font-bold text-[16px] lg:text-[18px] group-hover:text-white text-[#FB2E86]">
                    {item.title}
                  </h3>
                  <p className="text-[#151875] group-hover:text-white font-josef text-[14px]">
                    In Stock: {item.stock}
                  </p>
                  <p className="font-Lato font-bold text-[14px] group-hover:text-white text-[#151875]">
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
