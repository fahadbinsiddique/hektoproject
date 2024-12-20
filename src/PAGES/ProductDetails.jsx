import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ApiDataContext } from '../Components/Others/ContextApi'
import PageHeading from '../Components/Others/PageHeading'

const ProductDetails = () => {

    let productId = useParams()
    
    
    let data = useContext(ApiDataContext)
    
    
    let singleProduct= data.filter((item)=> item.id == productId.id)
   
    
    
  return (
    <section>

<PageHeading headline='Product Details' p1='Home' p2='. Pages' page='. Product Details' />
       
        <div className="container mx-auto">

            <div className='flex'>
            {singleProduct[0]?.images?.map((image)=>(
                <div className='w-[23%] '>
                    <img src={image} alt="" />
                </div>
            ))}
            </div>

            {singleProduct.map((item)=>(
            <div >
                <h3 className='text-[36px] font-josef font-semibold'>{item.title}</h3>
                <p>$ {item.price}</p>
                <p>-{item.discountPercentage}%</p>
                <p>{item.description}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default ProductDetails
