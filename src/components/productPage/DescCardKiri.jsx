import React from "react";

const DescCardKiri = ({ content }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-10">
      <div className="flex flex-col md:items-end" data-aos="fade-right" data-aos-duration="1000">
        <h1 className="font-semibold text-[25px] flex items-center">{content.title}</h1>
        <p className="text-dimBlue text-justify md:text-right text-[12px] lg:text-[16px] leading-loose">{content.desc}</p>
      </div>
      <img src={content.img} alt="oilBarrel" className="w-[200px]" data-aos="fade-left" data-aos-duration="1000"/>
    </div>
  );
};

export default DescCardKiri;
