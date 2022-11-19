import React from "react";

const HeadingAbout = () => {
  return (
    <section id="heading-about" className="flex flex-col w-full">
      <div className="flex pt-32 pb-14 flex-1 justify-center items-start flex-col">
        <div className="flex flex-row pt-10 justify-between items-center w-full">
          <div className="w-full">
            <h1 className="flex-1 font-poppins font-semibold text-[45px] sm:text-[65px] text-secondary leading-[55px] sm:leading-[80px]">
              Ready to compete with global market with high quality and good service <span className="text-accent text-7xl">.</span>
            </h1>
            <p className="font-poppins text-dimBlue font-normal text-[15px] sm:text-[23px] sm:leading-[41px] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingAbout;
