import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ApiDataContext } from '../Components/Others/ContextApi'

const ProductDetails = () => {

    let productId = useParams()
    console.log('1',productId);
    
    let data = useContext(ApiDataContext)
    
    
    let singleProduct= data.filter((item)=> item.id == productId.id)
   
    console.log(singleProduct);
    
  return (
    <section>
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
                <h3>{item.title}</h3>
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
