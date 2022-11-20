import React from "react";
import oilBarrel from "../../assets/images/iolbarrel.png";

const ProductDesc = () => {
  return (
    <section id="product" className="sm:px-40 px-16 bg-white pt-28 lg:flex lg:flex-col w-full">
      <div className="flex items-center flex-col">
        <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">OUR PRODUCT</div>
        <div className="lg:mt-2">
          <h1 className="text-[40px] lg:text-4xl font-semibold">Products We Sell</h1>
        </div>
        <div className="py-16 min-w-full lg:flex lg:justify-center lg:gap-7">
          <div className="hover:bg-natural hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex py-5 px-7 rounded-lg">
            <div>
              <img src={oilBarrel} alt="oilbarrel" className="w-18 mr-2" />
            </div>
            <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">
              BIO DIESEL B-20 <br />
              (HIGH SPEED DIESEL)
            </h1>
          </div>
          <div className="hover:bg-natural hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex py-5 px-7 rounded-lg">
            <div>
              <img src={oilBarrel} alt="oilbarrel" className="w-18 mr-2" />
            </div>
            <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">
              MARINE FUEL OIL <br />
              (MFO-1)
            </h1>
          </div>
          <div className="hover:bg-natural hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex py-5 px-7 rounded-lg">
            <div>
              <img src={oilBarrel} alt="oilbarrel" className="w-18 mr-2" />
            </div>
            <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">MARINE DIESEL FUEL</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
