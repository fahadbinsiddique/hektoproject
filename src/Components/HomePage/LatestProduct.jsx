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
  const products = [
    { image: image1166png, title: "Comfort Handy Craft", price: 42, oldPrice: 65 },
    { image: image15png, title: "Comfort Handy Craft", price: 42, oldPrice: 65 },
    { image: image1168png, title: "Comfort Handy Craft", price: 42, oldPrice: 65 },
    { image: image23png, title: "Comfort Handy Craft", price: 42, oldPrice: 65 },
    { image: image321png, title: "Comfort Handy Craft", price: 42, oldPrice: 65 },
    { image: image31png, title: "Comfort Handy Craft", price: 42, oldPrice: 65 },
  ];

  return (
    <section>
      <div className="container mx-auto pt-16">
        {/* Section Heading */}
        <ReUsableOne
          heading="Leatest Products"
          catergoryName1="New Arrival"
          catergoryName2="Best Seller"
          catergoryName3="Featured"
          catergoryName4="Special Offer"
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 pt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group shadow-md rounded-md overflow-hidden relative bg-white"
            >
              {/* Sale Badge */}
              <div className="absolute w-[50%] top-[-60px] left-[-180px] duration-700 ease-in-out group-hover:left-[-35px]">
                <img src={Sale1png} alt="Sale Badge" />
              </div>

              {/* Product Image */}
              <div className="w-full h-[270px] flex items-center justify-center bg-[#F7F7F7] group-hover:bg-white">
                <img src={product.image} alt={product.title} />
              </div>

              {/* Product Details */}
              <div className="p-4 space-y-2">
                <h1 className="font-josef text-[18px] text-[#151875]">{product.title}</h1>
                <div className="flex justify-between items-center">
                  <h1 className="font-josef text-[16px] text-[#151875]">${product.price.toFixed(2)}</h1>
                  <h1 className="font-josef text-[12px] line-through text-[#FB2448]">
                    ${product.oldPrice.toFixed(2)}
                  </h1>
                </div>
              </div>

              {/* Hover Icons */}
              <div className="absolute space-y-4 top-[120px] left-[-20px] duration-700 ease-in-out group-hover:left-4">
                <FiShoppingCart className="text-[#2F1AC4] text-[20px]" />
                <IoIosHeartEmpty className="text-[#2F1AC4] text-[20px]" />
                <BsZoomIn className="text-[#2F1AC4] text-[20px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
