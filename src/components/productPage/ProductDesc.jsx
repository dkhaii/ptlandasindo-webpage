import React from "react";
import { DescCardKanan, DescCardKiri } from "../";
import fuelBarrel from "../../assets/images/fuel-barrel.png";
import fuelCan from "../../assets/images/fuel-can.png";
import oil from "../../assets/images/oil.png";

const ProductDesc = ({}) => {
  return (
    <section id="product" className="xl:px-60 lg:px-40 sm:px-16 px-5 bg-white pt-28 lg:flex lg:flex-col w-full">
      <div className="flex items-center flex-col">
        <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">OUR PRODUCT</div>
        <div className="lg:mt-2">
          <h1 className="text-[40px] lg:text-4xl font-semibold">Products We Sell</h1>
        </div>
        <div className="py-20 min-w-full flex items-center gap-7">
          <div className="flex flex-col">
            <div className="py-20">
              <DescCardKanan
                content={{
                  img: fuelBarrel,
                  title: "BIO DIESEL B-20 (HIGH SPEED DIESEL)",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }}
              />
            </div>
            <div className="py-20">
              <DescCardKiri
                content={{
                  img: fuelCan,
                  title: "MARINE FUEL OIL (MFO-1)",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }}
              />
            </div>
            <div className="py-20">
              <DescCardKanan
                content={{
                  img: oil,
                  title: "BIO DIESEL B-20 (HIGH SPEED DIESEL)",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
