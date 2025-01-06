import React from 'react'
import PageHeading from '../Others/PageHeading'
import { FaCircle } from "react-icons/fa6";
import img1 from '../../assets/img/Grdfadsfoup 267.png'


const Contact = () => {
  return (
    <>
      <PageHeading
        headline="Contact Us"
        p1="Home"
        p2=". Pages"
        page=". Contact Us"
      />

      <div className="container mx-auto">
        <section className="pt-24 pb-16">
          <div className="flex gap-52  ">
            <div>
              <p className="font-josef py-4 font-bold text-[36px] text-[#151875]">
                Information About us
              </p>
              <p className="font-lato w-[560px] pt-4 pb-12  font-semibold text-[16px] text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <div className="flex gap-4">
                <FaCircle className="text-[#5625DF] text-[25px] " />
                <FaCircle className="text-[#FF27B7]  text-[25px]" />
                <FaCircle className="text-[#37DAF3]  text-[25px]" />
              </div>
            </div>

            <div>
              <p className="font-josef py-4 pb-12  font-bold text-[36px] text-[#151875]">
                Contact Way
              </p>

              <div className="flex pb-16 py-4 justify-between w-[490px]">
                <div className="flex items-center gap-5">
                  <FaCircle className="text-[50px] text-[#5726DF]" />
                  <p className="font-lato   font-semibold text-[16px] text-[#8A8FB9]">
                    Tel: 877-67-88-99 <br />
                    E-Mail: shop@store.com
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <FaCircle className="text-[50px] text-[#FB2E86]" />
                  <p className="font-lato  font-semibold text-[16px] text-[#8A8FB9]">
                    Support Forum <br />
                    For over 24hr
                  </p>
                </div>
              </div>

              <div className="flex py-4 justify-between w-[490px]">
                <div className="flex items-center gap-5">
                  <FaCircle className="text-[50px] text-[#FFB265]" />
                  <p className="font-lato   font-semibold text-[16px] text-[#8A8FB9]">
                    20 Margaret st, London <br />
                    Great britain, 3NM98-LK
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <FaCircle className="text-[50px] text-[#1BE982]" />
                  <p className="font-lato  font-semibold text-[16px] text-[#8A8FB9]">
                    Support Forum <br />
                    For over 24hr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='pt-48 pb-64 '>
            <div className="flex gap-52">
              <div>
                <p className="font-josef py-4 font-bold text-[36px] text-[#151875]">
                  Get In Touch
                </p>
                <p className="font-lato w-[560px] pt-4 pb-12  font-semibold text-[16px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis neque ultrices tristique amet erat vitae eget dolor los
                  vitae lobortis quis bibendum quam.
                </p>

                
                <div className="max-w-[600px] mx-auto py-8">
                  
                  <form className="space-y-6">
                    {/* Row 1: Name and Email */}
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <input
                          type="text"
                          placeholder="Your Name*"
                          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="w-1/2">
                        <input
                          type="email"
                          placeholder="Your E-mail*"
                          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Row 2: Subject */}
                    <div>
                      <input
                        type="text"
                        placeholder="Subject*"
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <textarea
                        placeholder="Type Your Message*"
                        rows="4"
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="">
                      <button
                        type="submit"
                        className="bg-pink-500 text-white py-3 px-6 rounded hover:bg-pink-600 transition"
                      >
                        Send Mail
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="flex items-center">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact
