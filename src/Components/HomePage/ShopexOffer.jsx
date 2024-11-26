import React from 'react'
import car from '../../assets/img/free-delivery 1.png'
import cash from '../../assets/img/cashback 1.png'
import achive from '../../assets/img/premium-quality 1.png'
import hour from '../../assets/img/24-hours-support 1.png'

const ShopexOffer = () => {
  return (
    <section>
        <div className="container mx-auto  ">
            <h2 className='text-[42px]  py-16 font-josef font-bold text-center text-[#151875]'>What Shopex Offer!</h2>
            <div className="flex justify-between">
                <div className='w-[23%] rounded-lg h-[320px] shadow-lg '>
                    <div className=' p-10 flex justify-center'>
                        <img src={car} className='items-center' alt="" />
                    </div >
                    <div className='text-center'>
                    <h2 className='text-[#151875] font-semibold font-josef text-[22px]'>24/7 Support</h2>
                    <p className='font-Lato font-bold text-[16px] text-[#1A0B5B] py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className='w-[23%] rounded-lg h-[320px] shadow-lg '>
                    <div className=' p-10 flex justify-center'>
                        <img src={cash} className='items-center' alt="" />
                    </div >
                    <div className='text-center'>
                    <h2 className='text-[#151875] font-semibold font-josef text-[22px]'>24/7 Support</h2>
                    <p className='font-Lato font-bold text-[16px] text-[#1A0B5B] py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className='w-[23%] rounded-lg h-[320px] shadow-lg '>
                    <div className=' p-10 flex justify-center'>
                        <img src={achive} className='items-center' alt="" />
                    </div >
                    <div className='text-center'>
                    <h2 className='text-[#151875] font-semibold font-josef text-[22px]'>24/7 Support</h2>
                    <p className='font-Lato font-bold text-[16px] text-[#1A0B5B] py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className='w-[23%] rounded-lg h-[320px] shadow-lg '>
                    <div className=' p-10 flex justify-center'>
                        <img src={hour} className='items-center' alt="" />
                    </div >
                    <div className='text-center'>
                    <h2 className='text-[#151875] font-semibold font-josef text-[22px]'>24/7 Support</h2>
                    <p className='font-Lato font-bold text-[16px] text-[#1A0B5B] py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default ShopexOffer
