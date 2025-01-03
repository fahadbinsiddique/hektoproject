import React, { useState } from "react";
import PageHeading from "../Others/PageHeading";
import { CiSearch } from "react-icons/ci";
import SponserLogo from "../HomePage/SponserLogo";
import img1 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 2.png";
import img2 from "../../assets/img/Vecfdfaftor.png";
import img3 from "../../assets/img/uil_calendar-alt.png";
import img4 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 3.png";
import img5 from "../../assets/img/bruce-mars-FWVMhUa_wbY-unsplash 4.png";

const BlogPage_1 = () => {
    const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    { id: 1, label: "Hobbies (14)" },
    { id: 2, label: "Women (21)" },
    { id: 3, label: "Travel (8)" },
    { id: 4, label: "Books (12)" },
    { id: 5, label: "Food (10)" },
    { id: 6, label: "Music (9)" },
  ];

  const getButtonClasses = (id) =>
    id === activeCategory
      ? "font-josef text-[14px] text-white bg-pink-500 rounded-md  py-2 w-[122px] "
      : "font-josef text-[14px] text-[#3F509E] bg-transparent px-6 py-2 hover:bg-gray-100 rounded-md";

  return (
    <>
      <PageHeading
        headline="Blog Page"
        p1="Home"
        p2=". Pages"
        page=". Blog Page"
      />
      <div>
        <div className="container mx-auto">
          <div className="flex justify-between pt-28 ">
            <div className=" w-[70%]">
              <div>
                <div>
                  <img src={img1} alt="" />
                </div>

                <div className="flex gap-5 py-6 ">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img2} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#ffe6f9] text-center items-center flex justify-center">
                      <p className="font-josef text-[14px] text-[#151875]">
                        Surf Auxion
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img3} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#feede2] text-center items-center flex justify-center">
                      <p className="font-lato font-semibold text-[14px] text-[#151875]">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-josef font-bold text-[30px] py-4 text-[#151875]">
                  Mauris at orci non vulputate diam tincidunt nec.
                </p>
                <p className="font-Lato text-[16px] w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <p className=" font-Lato text-[#151875] font-semibold pb-4 text-[18px] items-center justify-center ">
                  Read More{" "}
                  <span className="text-[50px] text-[#f72588]">.</span>
                </p>
              </div>
              <div>
                <div>
                  <img src={img4} alt="" />
                </div>

                <div className="flex gap-5 py-6 ">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img2} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#ffe6f9] text-center items-center flex justify-center">
                      <p className="font-josef text-[14px] text-[#151875]">
                        Surf Auxion
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img3} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#feede2] text-center items-center flex justify-center">
                      <p className="font-lato font-semibold text-[14px] text-[#151875]">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-josef font-bold text-[30px] py-4 text-[#151875]">
                  Aenean vitae in aliquam ultrices lectus. Etiam.
                </p>
                <p className="font-Lato text-[16px] w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <p className=" font-Lato text-[#151875] font-semibold pb-4 text-[18px] items-center justify-center ">
                  Read More{" "}
                  <span className="text-[50px] text-[#f72588]">.</span>
                </p>
              </div>
              <div>
                <div>
                  <img src={img5} alt="" />
                </div>

                <div className="flex gap-5 py-6 ">
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img2} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#ffe6f9] text-center items-center flex justify-center">
                      <p className="font-josef text-[14px] text-[#151875]">
                        Surf Auxion
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <img src={img3} alt="" />
                    </div>

                    <div className="w-[160px] h-[23px] bg-[#feede2] text-center items-center flex justify-center">
                      <p className="font-lato font-semibold text-[14px] text-[#151875]">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-josef font-bold text-[30px] py-4 text-[#151875]">
                  Sit nam congue feugiat nisl, mauris amet nisi.
                </p>
                <p className="font-Lato text-[16px] w-[852px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                <p className=" font-Lato text-[#151875] font-semibold pb-4 text-[18px] items-center justify-center ">
                  Read More{" "}
                  <span className="text-[50px] text-[#f72588]">.</span>
                </p>
              </div>

              <div className=" justify-center flex pt-6 pb-12 ">
                <div className="flex justify-between  w-[236px] h-[24px]  ">
                  <p className="font-Lato font-semibold text-[16px] ">1</p>
                  <p className="font-Lato font-semibold text-[16px] ">2</p>
                  <p className="font-Lato font-semibold text-[16px] ">3</p>
                  <p className="font-Lato font-semibold text-[16px] ">4</p>
                </div>
              </div>
            </div>

            <div className=" w-[30%]">
              <div className="pb-12">
                <p className="font-semibold pb-4 font-josef text-[22px] text-[#151875]">
                  Search
                </p>

                <div className="relative w-[270px] h-[40px]">
                  <input
                    type="search"
                    className="w-full h-full border-2 pl-10 pr-4 rounded"
                    placeholder="Search..."
                  />
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
              </div>

              <div>
                <p className="text-[22px] pb-4 font-semibold font-josef text-[#151875]">
                  Categories
                </p>

    

                <div className="w-[254px]  flex flex-col justify-between h-[161px]">
                  <div className="flex flex-wrap  justify-between">
                  {categories.map((category) => (
                    <button
                      
                      key={category.id}
                      className={getButtonClasses(category.id)}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.label}
                    </button>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <SponserLogo />
      </div>
    </>
  );
};

export default BlogPage_1;
