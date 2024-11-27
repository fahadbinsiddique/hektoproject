import React from 'react'
import banner3 from '../../assets/img/Rectangle 102.png'

const Banner3 = () => {
  return (
    <section className='py-24'>
        <div className='relative '>
        <img src={banner3} alt="" className='w-[100%]' />

        <h2 className='font-josef font-bold top-[40%] text-center left-[38%]  w-[620px] text-[35px]  text-[#151875] absolute '>Get Leatest Update By Subscribe
        0ur Newslater</h2>

        <button className='font-josef absolute top-[70%] left-[50%]  font-semibold text-[17px] rounded-sm py-4 px-6 bg-[#f92a87] text-white'>Shop Now</button>
        </div>
    </section>
  )
}

export default Banner3
