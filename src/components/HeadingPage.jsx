import React from "react";
import ornamen from "../assets/svg/dotOrnament.svg";

const HeadingPage = ({ content }) => {
  return (
    <section id="heading-about" className="xl:px-60 lg:px-36 sm:px-16 px-5 flex flex-col w-full">
      <div className="flex pt-32 pb-14 flex-1 justify-center items-start flex-col">
        <div className="relative flex flex-row pt-10 justify-between items-center w-full">
          <div className=" w-full">
            <h1 className="flex-1 font-poppins font-semibold text-[45px] sm:text-[55px] lg:text-[65px] text-secondary leading-[55px] sm:leading-[70px] lg::leading-[80px]" data-aos="fade-up" data-aos-duration="2000">
              {content.title} <span className="text-accent text-7xl">.</span>
            </h1>
            <p className="font-poppins text-dimBlue font-normal text-[15px] sm:text-[19px] lg:text-[23px] leading-[28px] sm:leading-[35px] lg:leading-[41px] mt-5" data-aos="fade-up" data-aos-duration="3000">{content.desc}</p>
          </div>
            <img src={ornamen} alt="ornamen" className="absolute -top-0 -left-20 -z-10" data-aos="fade-up" data-aos-duration="2000" />
        </div>
      </div>
    </section>
  );
};

export default HeadingPage;
