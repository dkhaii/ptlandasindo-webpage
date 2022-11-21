import React from "react";
import oilBarrel from "../../assets/images/iolbarrel.png";

const ProductDesc = () => {
  return (
    <section id="product" className="sm:px-80 px-16 bg-white pt-28 lg:flex lg:flex-col w-full">
      <div className="flex items-center flex-col">
        <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">OUR PRODUCT</div>
        <div className="lg:mt-2">
          <h1 className="text-[40px] lg:text-4xl font-semibold">Products We Sell</h1>
        </div>
        <div className="py-16 min-w-full flex items-center gap-7">
          <div className="hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex rounded-2xl">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                <div className="flex">
                  <img src={oilBarrel} alt="oilbarrel" className="w-18 mr-2" />
                  <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">BIO DIESEL B-20 (HIGH SPEED DIESEL)</h1>
                </div>
              </div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex rounded-2xl">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                <div className="flex">
                  <img src={oilBarrel} alt="oilbarrel" className="w-18 mr-2" />
                  <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">MARINE FUEL OIL (MFO-1)</h1>
                </div>
              </div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-2 hover:scale-110 hover:shadow-lg duration-300 flex rounded-2xl">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                <div className="flex">
                  <img src={oilBarrel} alt="oilbarrel" className="w-18 mr-2" />
                  <h1 className="font-semibold text-lg lg:text-[14px] flex items-center">MARINE DIESEL FUEL</h1>
                </div>
              </div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
