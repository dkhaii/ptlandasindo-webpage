import React from "react";
import SectionTitle from "../landingPage/SectionTitle";

const Services = () => {
  return (
    <section id="services" className="bg-white xl:px-60 lg:px-40 sm:px-16 px-5 py-10 xl:py-28 flex xl:flex-row flex-col w-full xl:gap-40">
      <div className="flex items-center md:items-start flex-col xl:w-[400px]" data-aos="fade-up" data-aos-duration="1000">
        <SectionTitle
          content={{
            subTitle: "OUR FUTURE",
            title: "The Future Of Our Company",
          }}
          bgColor={"bg-natural"}
        />
      </div>

      <div className="flex justify-end flex-col sm:flex-row w-full mt-16 xl:mt-0 gap-5 lg:gap-10">
        <div className="flex flex-col" data-aos="fade-right" data-aos-duration="2000">
          <h2 className="card-title text-secondary text-2xl">Vission</h2>
          <p className="text-justify text-dimBlue text-[14px] lg:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className=""></div>
        <div className=" flex flex-col" data-aos="fade-left" data-aos-duration="2000">
          <h2 className="card-title text-secondary text-2xl">Mission</h2>
          <p className="text-justify text-dimBlue text-[14px] lg:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
