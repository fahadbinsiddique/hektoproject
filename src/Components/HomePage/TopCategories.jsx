import React from "react";
import image20png from "../../assets/img/image 20.png";
import image1168png from "../../assets/img/image 1168.png";
import image1171png from "../../assets/img/image 1171.png";
import semicircle from "../../assets/img/semi circle design.png";

const TopCategories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section className="pb-5">
      <div className="container mx-auto">
        <h1 className="font-josef font-bold text-center py-16 text-[42px] text-[#151875]">
          Top Categories
        </h1>


        
        <div className="flex justify-between">
          <div className="w-[22%]  ">
            <div className=" relative overflow-hidden  group">
              <div className="flex justify-center w-[220px]  duration-700 -z-50  ease-in-out absolute top-[35px] left-[55px]   bg-[#986be4] h-[220px] rounded-[100%]  group-hover:w-[278px] group-hover:h-[278px] group-hover:top-[12px] group-hover:left-[20px] "></div>

              <div className="flex justify-center  h-[290px] py-2 ">
                <img
                  src={image20png}
                  className=" p-12 bg-[#f6f7fb] rounded-[100%]"
                  alt=""
                />
              </div>
              <button className="absolute -bottom-[50px] left-[100px]  bg-[#08D15F] font-josef font-medium text-[12px] w-[124px]  py-2 rounded-md duration-1000 ease-in-out text-white group-hover:bottom-[25px] ">
                View Details
              </button>
            </div>

            <h2 className="className='font-josef font-semibold py-6 text-center text-[20px] text-[#151875]'">
              Mini LCW Chair
            </h2>
            <p className="font-josef text-center text-[16px] text-[#151875]">
              $56.00
            </p>
          </div>
          <div className="w-[22%]  ">
            <div className=" relative overflow-hidden  group">
              <div className="flex justify-center w-[220px]  duration-700 -z-50  ease-in-out absolute top-[35px] left-[55px]   bg-[#986be4] h-[220px] rounded-[100%]  group-hover:w-[278px] group-hover:h-[278px] group-hover:top-[12px] group-hover:left-[20px] "></div>

              <div className="flex justify-center  h-[290px] py-2 ">
                <img
                  src={image1168png}
                  className=" p-12 bg-[#f6f7fb] rounded-[100%]"
                  alt=""
                />
              </div>
              <button className="absolute -bottom-[50px] left-[100px]  bg-[#08D15F] font-josef font-medium text-[12px] w-[124px]  py-2 rounded-md duration-1000 ease-in-out text-white group-hover:bottom-[25px] ">
                View Details
              </button>
            </div>

            <h2 className="className='font-josef font-semibold py-6 text-center text-[20px] text-[#151875]'">
              Mini LCW Chair
            </h2>
            <p className="font-josef text-center text-[16px] text-[#151875]">
              $56.00
            </p>
          </div>
          <div className="w-[22%]  ">
            <div className=" relative overflow-hidden  group">
              <div className="flex justify-center w-[220px]  duration-700 -z-50  ease-in-out absolute top-[35px] left-[55px]   bg-[#986be4] h-[220px] rounded-[100%]  group-hover:w-[278px] group-hover:h-[278px] group-hover:top-[12px] group-hover:left-[20px] "></div>

              <div className="flex justify-center  h-[290px] py-2 ">
                <img
                  src={image1171png}
                  className=" p-12 bg-[#f6f7fb] rounded-[100%]"
                  alt=""
                />
              </div>
              <button className="absolute -bottom-[50px] left-[100px]  bg-[#08D15F] font-josef font-medium text-[12px] w-[124px]  py-2 rounded-md duration-1000 ease-in-out text-white group-hover:bottom-[25px] ">
                View Details
              </button>
            </div>

            <h2 className="className='font-josef font-semibold py-6 text-center text-[20px] text-[#151875]'">
              Mini LCW Chair
            </h2>
            <p className="font-josef text-center text-[16px] text-[#151875]">
              $56.00
            </p>
          </div>
          <div className="w-[22%]  ">
            <div className=" relative overflow-hidden  group">
              <div className="flex justify-center w-[220px]  duration-700 -z-50  ease-in-out absolute top-[35px] left-[55px]   bg-[#986be4] h-[220px] rounded-[100%]  group-hover:w-[278px] group-hover:h-[278px] group-hover:top-[12px] group-hover:left-[20px] "></div>

              <div className="flex justify-center  h-[290px] py-2 ">
                <img
                  src={image20png}
                  className=" p-12 bg-[#f6f7fb] rounded-[100%]"
                  alt=""
                />
              </div>
              <button className="absolute -bottom-[50px] left-[100px]  bg-[#08D15F] font-josef font-medium text-[12px] w-[124px]  py-2 rounded-md duration-1000 ease-in-out text-white group-hover:bottom-[25px] ">
                View Details
              </button>
            </div>

            <h2 className="className='font-josef font-semibold py-6 text-center text-[20px] text-[#151875]'">
              Mini LCW Chair
            </h2>
            <p className="font-josef text-center text-[16px] text-[#151875]">
              $56.00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
