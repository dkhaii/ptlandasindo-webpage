import React from 'react'
import { Navbar, Hero } from "../"

const AboutUs = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className="sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <Navbar></Navbar>
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="w-full">
          {/* <Hero></Hero> */}
        </div>
      </div>
    </div>
  )
}

export default AboutUs