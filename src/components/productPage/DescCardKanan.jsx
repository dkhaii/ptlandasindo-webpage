import React from "react";


const DescCardKanan = ({ content }) => {
  return (
    <div className="flex items-center gap-10">
      <img src={content.img} alt="oilBarrel" className="w-[200px]" />
      <div className="flex flex-col">
        <h1 className="font-semibold text-[25px] flex items-center">{content.title}</h1>
        <p className="text-dimBlue text-left text-[12px] lg:text-[16px] leading-loose">{content.desc}</p>
      </div>
    </div>
  );
};

export default DescCardKanan;
