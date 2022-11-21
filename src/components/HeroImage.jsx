import React from 'react'

const HeroImage = (props) => {
    console.log(props);
  return (
    <section id="heading-image" className="w-full h-[680px]">
        <div className="-z-10">
            <img src={props.content.imageUrl} alt="heroBg" className="object-cover w-full"/>
        </div>
    </section>
  )
}

export default HeroImage