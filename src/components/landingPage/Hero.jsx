import React, { useRef, useState } from "react";
import gambar3 from "../../assets/images/gambar3.jpg"

const Hero = () => {
  const vidioRef = useRef();

  return (
    <section id="home" className="flex flex-col w-full h-[768px]">
      <div className="absolute -z-10">
        <div className="absolute min-h-screen w-full bg-darker bg-opacity-90"></div>
        <img src={gambar3} alt="gambar-3" className="object-cover"/>
      </div>
      <div className="sm:px-80 px-16 py-32 flex-1 flex justify-center items-start flex-col">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="w-full">
            <h1 className="flex-1 font-poppins font-semibold text-[45px] sm:text-[65px] text-white leading-[55px] sm:leading-[80px]">
              PT. Landasindo <br /> Sahu Baruna Jaya
            </h1>
            <p className="font-poppins font-semibold text-white text-[18px] sm:text-[23px] leading-[27px] sm:leading-[31px] max-w-[470px] mt-5">
              MARINE FUEL SUPPLY AND TRANSPORT <br />
              {""}
              <span className="text-dimWhite font-normal text-[15px] sm:text-[18px]">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              {""}
            </p>
            <button className="btn btn-outline btn-accent mt-5 px-10 text-lg text-white">learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
