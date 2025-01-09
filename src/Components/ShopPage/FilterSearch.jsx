import React, { useContext, useEffect, useState } from "react";
import { ApiDataContext } from "../Others/ContextApi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { TiArrowSortedUp } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cartSlice";
import { useSelector } from "react-redux";

const FilterSearch = () => {
  const value = useContext(ApiDataContext);

  const cartData = useSelector((state) => state.cartItemManager.cartItems);

  //category

  let [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory([...new Set(value.map((item) => item.category))]);
  }, [value]);

  let [cat, setCat] = useState([]);

  const handleCategory = (catName) => {
    let filteredProduct = value.filter((item) => item.category == catName);
    setCat(filteredProduct);
  };
  let [catShow, setCatShow] = useState(false);

  //brand
  let [brand, setBrand] = useState([]);

  useEffect(() => {
    setBrand([...new Set(value.map((item) => item.brand))]);
  }, [value]);

  const handleBrand = (brandName) => {
    let filteredBrand = value.filter((item) => item.brand == brandName);
    setCat(filteredBrand);
  };
  let [brandShow, setBrandShow] = useState(false);
  //===========

  const [catPrice, setCatPrice] = useState(false);

  const [priceList, setPriceList] = useState([]);

  const handlePricing = (priceRange) => {
    let priceFilteredItem = value.filter(
      (item) => item.price > priceRange.min && item.price <= priceRange.max
    );
    setPriceList(priceFilteredItem);
  };

  let [currentPage, setCurrentPage] = useState(1);
  let [perPageItem, setPerPageItem] = useState(20);
  let lastItemIndex = currentPage * perPageItem;
  let firstItemIndex = lastItemIndex - perPageItem;
  let totalPageNumber = Math.ceil(value.length / perPageItem);
  let perPageProduct = value.slice(firstItemIndex, lastItemIndex);

  const handleNextPage = () => {
    if (currentPage !== totalPageNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePage = (item) => {
    setCurrentPage(item);
  };

  let pageNumbers = [];

  for (let i = 1; i <= totalPageNumber; i++) {
    pageNumbers.push(i);
  }

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
  };

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
            <div className="w-[20%] space-y-3">
              <p
                onClick={() => setCatShow(!catShow)}
                className="font-josef underline underline-offset-[6px] cursor-pointer text-[20px] font-bold flex items-center text-[#151875]  justify-between"
              >
                Categories
                {catShow == true ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
              </p>

              {catShow && (
                <ul className=" h-[400px] overflow-x-scroll  bg-gray-50">
                  {category.map((item) => (
                    <li
                      onClick={() => handleCategory(item)}
                      className="py-4 hover:bg-gray-200 cursor-pointer border-b-[1px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <p
                onClick={() => setBrandShow(!brandShow)}
                className="font-josef underline underline-offset-[6px] cursor-pointer text-[20px] font-bold flex items-center text-[#151875]  justify-between"
              >
                Brand
                {brandShow == true ? (
                  <TiArrowSortedDown />
                ) : (
                  <TiArrowSortedUp />
                )}
              </p>

              {brandShow && (
                <ul className=" h-[400px] overflow-x-scroll  bg-gray-50">
                  {brand.map((item) => (
                    <li
                      onClick={() => handleBrand(item)}
                      className="py-4 hover:bg-gray-200 cursor-pointer border-b-[1px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <p
                onClick={() => setCatPrice(!catPrice)}
                className="font-josef underline underline-offset-[6px] cursor-pointer text-[20px] font-bold flex items-center  text-[#151875] justify-between"
              >
                Price Filter
                {catPrice == true ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
              </p>

              {catPrice && (
                <ul className=" h-[300px]  overflow-x-scroll bg-gray-50">
                  <li
                    onClick={() => handlePricing({ min: 0.0, max: 100 })}
                    className="py-4 hover:bg-gray-200 cursor-pointer border-b-[1px]"
                  >
                    $ 00.00 - 100.00
                  </li>

                  <li
                    onClick={() => handlePricing({ min: 101.0, max: 500 })}
                    className="py-4 cursor-pointer hover:bg-gray-200 border-b-[1px]"
                  >
                    $ 101.00 - 500.00
                  </li>
                  <li
                    onClick={() => handlePricing({ min: 501.0, max: 1000 })}
                    className="py-4 cursor-pointer hover:bg-gray-200 border-b-[1px]"
                  >
                    $ 501.00 - 1000.00
                  </li>
                  <li
                    onClick={() => handlePricing({ min: 1001.0, max: 5000 })}
                    className="py-4 cursor-pointer hover:bg-gray-200 border-b-[1px]"
                  >
                    $ 1001.00 - 5000.00
                  </li>
                  <li
                    onClick={() => handlePricing({ min: 5001.0, max: 100000 })}
                    className="py-4 cursor-pointer hover:bg-gray-200 border-b-[1px]"
                  >
                    $ 5001.00 - 100000.00
                  </li>
                </ul>
              )}
            </div>

            <div className="w-[80%]">
              <div className=" flex items-center flex-wrap gap-5 space-y-4">
                {cat.length > 0
                  ? cat.map((item) => (
                      <div className="w-[32%] shadow-md rounded-md group   ">
                        <div className="bg-[#F6F7FB] flex justify-center overflow-hidden relative  h-[350px] pt-[40px] pb-[20px]">
                          <img className="  " src={item.thumbnail} alt="" />
                          <button className="absolute -bottom-10 bg-[#08D15F] font-josef font-medium text-[12px] px-7 py-2 rounded-md duration-700 ease-in-out text-white group-hover:bottom-2 ">
                            View Details
                          </button>
                          <div className="flex gap-5 absolute  duration-700 ease-in-out -left-36 group-hover:left-2">
                            <FiShoppingCart className="text-[#2F1AC4] text-[25px]  " />
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
                  : priceList.length > 0
                  ? priceList.map((item) => (
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
                  : perPageProduct.map((item) => (
                      <div className="w-[32%] shadow-md rounded-md group  ">
                        <div className="bg-[#F6F7FB] flex justify-center overflow-hidden relative  h-[350px] pt-[40px] pb-[20px]">
                          <img className="  " src={item.thumbnail} alt="" />

                          <Link to={`/shop/${item.id}`}>
                            <button className="absolute -bottom-12 left-[140px] bg-[#08D15F] font-josef font-medium text-[12px] px-7 py-2 rounded-md duration-700 ease-in-out text-white group-hover:bottom-2 ">
                              View Details
                            </button>{" "}
                          </Link>

                          <div className="flex gap-5   cursor-pointer absolute duration-700 ease-in-out -left-48 group-hover:left-2">
                            <div className="hover:bg-white w-12 items-center justify-center flex  h-12 rounded-full">
                              <FiShoppingCart
                                onClick={() => handleAddToCart(item)}
                                className="text-[#2F1AC4]  hover:text-[#f92a87] text-[25px]"
                              />
                            </div>

                            <div className="hover:bg-white w-12 items-center justify-center flex  h-12 rounded-full">
                              <IoIosHeartEmpty className="text-[#1389FF] hover:text-[#f92a87] text-[25px]" />
                            </div>

                            <div className="hover:bg-white w-12 items-center justify-center flex  h-12 rounded-full">
                              <BsZoomIn className="text-[#1389FF] hover:text-[#f92a87] text-[25px]" />
                            </div>
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

              <div>
                <ul className=" flex gap-6 py-5">
                  <li
                    onClick={handlePrevPage}
                    className={` border-[2px] px-5 py-2 ${
                      currentPage === 1 ? "hidden" : ""
                    } `}
                  >
                    
                    <button> Prev </button>
                  </li>

                  {pageNumbers.map((pageNumbersList) => (
                    <li
                      onClick={() => handlePage(pageNumbersList)}
                      className={` border-[2px] px-5 py-2 ${
                        pageNumbersList === currentPage
                          ? "bg-[#f72588] text-white"
                          : ""
                      } `}
                    >
                      {" "}
                      <button> {pageNumbersList} </button>
                    </li>
                  ))}
                  <li
                    onClick={handleNextPage}
                    className={`border-[2px] px-5  py-2 ${
                      currentPage === totalPageNumber ? "hidden" : ""
                    }  `}
                  >
                    {" "}
                    <button>Next</button>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterSearch;
