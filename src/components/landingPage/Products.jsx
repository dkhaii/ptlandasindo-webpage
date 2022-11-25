import React from "react";
import oilBarrel from "../../assets/images/iolbarrel.png";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="product" className="xl:px-60 lg:px-40 sm:px-16 px-5 pt-28 lg:flex lg:flex-col w-full">
      <div className="flex items-center flex-col">
      <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">OUR PRODUCT</div>
      <div className="lg:mt-2">
        <h1 className="text-[40px] lg:text-4xl font-semibold">Products We Sell</h1>
      </div>
        <div className="py-16 min-w-full lg:flex lg:justify-center lg:gap-7">
          <ProductCard
            content={{
              title: "BIO DIESEL B-20 (HIGH SPEED DIESEL)",
              imageUrl: oilBarrel,
            }}
          />
          <ProductCard
            content={{
              title: "MARINE FUEL OIL (MFO-1)",
              imageUrl: oilBarrel,
            }}
          />
          <ProductCard
            content={{
              title: "MARINE DIESEL FUEL",
              imageUrl: oilBarrel,
            }}
          />
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default Products;
