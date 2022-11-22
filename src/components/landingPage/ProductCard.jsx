import React from "react";

const ProductCard = ({content}) => {
  return (
    <div className="hover:bg-natural hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex justify-center py-5 px-7 lg:w-[400px] rounded-lg">
      <div className="">
        <img src={content.imageUrl} alt="oilbarrel" className="w-18 mr-2" />
      </div>
      <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">
        {content.title}
      </h1>
    </div>
  );
};

export default ProductCard;
