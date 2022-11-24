import React from "react";

const DescCardKiri = ({ content }) => {
  return (
    <div className="flex items-center gap-10">
      <div className="flex flex-col items-end">
        <h1 className="font-semibold text-[25px] flex items-center">{content.title}</h1>
        <p className="text-dimBlue text-right text-[12px] lg:text-[16px] leading-loose">{content.desc}</p>
      </div>
      <img src={content.img} alt="oilBarrel" className="w-[200px]" />
    </div>
  );
};

export default DescCardKiri;
