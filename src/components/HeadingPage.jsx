import React from "react";

const HeadingPage = ({ content }) => {
  return (
    <section id="heading-about" className="xl:px-80 md:px-40 px-16 flex flex-col w-full">
      <div className="flex pt-32 pb-14 flex-1 justify-center items-start flex-col">
        <div className="flex flex-row pt-10 justify-between items-center w-full">
          <div className="w-full">
            <h1 className="flex-1 font-poppins font-semibold text-[45px] sm:text-[65px] text-secondary leading-[55px] sm:leading-[80px]">
              {content.title} <span className="text-accent text-7xl">.</span>
            </h1>
            <p className="font-poppins text-dimBlue font-normal text-[15px] sm:text-[23px] sm:leading-[41px] mt-5">{content.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingPage;
