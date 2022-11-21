import React from "react";
import oilBarrel from "../../assets/images/iolbarrel.png";
import DropdownCard from "./DropdownCard";

const ProductDesc = () => {
  return (
    <section id="product" className="sm:px-80 px-16 bg-white pt-28 lg:flex lg:flex-col w-full">
      <div className="flex items-center flex-col">
        <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">OUR PRODUCT</div>
        <div className="lg:mt-2">
          <h1 className="text-[40px] lg:text-4xl font-semibold">Products We Sell</h1>
        </div>
        <div className="py-16 min-w-full flex items-center gap-7">
          <DropdownCard
            content={{
              imageUrl: oilBarrel,
              title: "BIO DIESEL B-20 (HIGH SPEED DIESEL)",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }}
          />
          <DropdownCard
            content={{
              imageUrl: oilBarrel,
              title: "MARINE FUEL OIL (MFO-1)",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }}
          />
          <DropdownCard
            content={{
              imageUrl: oilBarrel,
              title: "MARINE DIESEL FUEL",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
