import React from "react";

const DropdownCard = ({content}) => {
  return (
    <div className="hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex rounded-2xl">
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <div className="flex">
            <img src={content.imageUrl} alt="oilbarrel" className="w-18 mr-2" />
            <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">{content.title}</h1>
          </div>
        </div>
        <div className="collapse-content">
          <p>{content.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownCard;
