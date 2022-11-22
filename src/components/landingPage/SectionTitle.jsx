import React from "react";

const SectionTitle = ({content}) => {
    
  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">{content.subTitle}</div>
      <div className="lg:mt-2">
        <h1 className="text-[40px] lg:text-4xl font-semibold">{content.title}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
