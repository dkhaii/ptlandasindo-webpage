import React from 'react'
import { NavNormal, Hero } from "../"

const AboutUs = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className="sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <NavNormal></NavNormal>
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