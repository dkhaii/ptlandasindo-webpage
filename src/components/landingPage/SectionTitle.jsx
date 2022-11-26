import React from "react";

const SectionTitle = ({ content, bgColor }) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start w-full">
      <div className={`flex justify-center ${bgColor} px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold w-28 lg:w-32`}>{content.subTitle}</div>
      <div className="lg:mt-2">
        <h1 className="text-[40px] lg:text-4xl font-semibold  lg:text-left text-center">{content.title}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
