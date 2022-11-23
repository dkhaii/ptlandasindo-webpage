import React from 'react'
import { NavNormal, HeadingMap, ContactList, Footer } from "../"

const ContactUs = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <NavNormal/>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <HeadingMap/>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <ContactList/>
        </div>
      </div>
     
      <div className='flex justify-center items-center w-full'>
        <div className='w-full'>
          <Footer 
          color={{ 
            bgColor: "bg-darker",
            textColor: "text-white"
           }}/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs