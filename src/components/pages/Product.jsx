import React from 'react'
import { NavNormal, HeadingProduct, HeadingImage, ProductDesc, Contact, Footer } from "../"

const Product = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <NavNormal></NavNormal>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <HeadingProduct></HeadingProduct>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <HeadingImage></HeadingImage>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <ProductDesc></ProductDesc>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <Contact></Contact>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default Product