import React, { useContext, useEffect, useState } from "react";
import { ApiDataContext } from "../Others/ContextApi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";

import { TiArrowSortedUp } from "react-icons/ti";


const FilterSearch = () => {
  const value = useContext(ApiDataContext);

  let [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory([...new Set(value.map((item) => item.category))]);
  }, [value]);

  let [categoryProduct, setCategoryProduct] = useState([]);

  const handleCategory = (catName) => {
    let filteredProduct = value.filter((item) => item.category == catName);
    setCategoryProduct(filteredProduct);
  };


let [catShow, setCatShow] = useState(false)



  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between py-[100px]">
            <div>
              <h2 className="font-josef font-bold  text-[22px] text-[#151875]">
                Ecommerce Acceories & Fashion item{" "}
              </h2>
              <p className="font-lato font-normal  text-[12px] text-[#8A8FB9]">
                About 9,620 result (0.62 seconds)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="font-lato   text-[16px] text-[#3F509E]">
                Per Page:
              </p>

              <input
                type="number"
                name=""
                id=""
                min="1"
                placeholder="  1"
                max="8"
                className=" border border-[#E7E6EF] w-[55px] h-[25px] "
              />
            </div>

            <div className="flex items-center gap-2">
              <p className="font-lato text-[16px] text-[#3F509E]">Sort By:</p>

              <select
                className="bg-transparent border h-[30px]  "
                name=""
                id=""
                placeholder="Best Match"
              >
                <option className="text-gray-500" value="">
                  Best Match
                </option>
                <option className="text-gray-500" value="">
                  Highets Price
                </option>
                <option className="text-gray-500" value="">
                  Lowest Price
                </option>
                <option className="text-gray-500" value="">
                  Best Review
                </option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <p>View:</p>

              <input
                type="text"
                name=""
                id=""
                className=" border border-[#E7E6EF] w-[150px] h-[30px] "
              />
            </div>
          </div>

          <div className="flex gap-5  ">
            <div className="w-[20%] ">
              <p onClick={()=>setCatShow(!catShow)} className="font-josef cursor-pointer text-[25px] font-bold flex items-center gap-[55px]">
                Shop by Category
                { catShow == true ?   <TiArrowSortedDown/> : <TiArrowSortedUp />


}
              </p>

              
    {catShow && 
    
    <ul className=" h-[400px] overflow-x-scroll bg-gray-50">

                {category.map((item) => (
                  <li
                    onClick={() => handleCategory(item)}
                    className="py-4 cursor-pointer border-b-[1px]">{item}
                  </li>
                ))}

              </ul>
    
    }


            </div>

            <div className="w-[80%] flex items-center flex-wrap gap-5 space-y-4">
              {categoryProduct.length > 0 ? 
                
                categoryProduct.map((item) => (
                    <div className="w-[32%] shadow-md rounded-md group   ">
                      <div className="bg-[#F6F7FB] flex justify-center overflow-hidden relative  h-[350px] pt-[40px] pb-[20px]">
                        <img className="  " src={item.thumbnail} alt="" />
                        <button className="absolute -bottom-10 bg-[#08D15F] font-josef font-medium text-[12px] px-7 py-2 rounded-md duration-700 ease-in-out text-white group-hover:bottom-2 ">
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
                        <p className="font-Lato text-[14px] group-hover:text-white text-[#151875] ">
                          $ {item.price}
                        </p>
                      </div>
                    </div>
                  ))


                : value.map((item) => (
                    <div className="w-[32%] shadow-md rounded-md group  ">
                      <div className="bg-[#F6F7FB] flex justify-center overflow-hidden relative  h-[350px] pt-[40px] pb-[20px]">
                        <img className="  " src={item.thumbnail} alt="" />
                        <button className="absolute -bottom-10 bg-[#08D15F] font-josef font-medium text-[12px] px-7 py-2 rounded-md duration-700 ease-in-out text-white group-hover:bottom-2 ">
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
                        <p className="font-Lato text-[14px] group-hover:text-white text-[#151875] ">
                          $ {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterSearch;
