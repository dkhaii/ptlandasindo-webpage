import React from "react";
import { Link } from "react-router-dom";
import oilBarrel from "../../assets/images/iolbarrel.png";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="product" className="xl:px-60 lg:px-40 sm:px-16 px-5 pt-28 lg:flex lg:flex-col w-full">
      <div className="flex items-center flex-col">
        <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold" data-aos="fade-up" data-aos-duration="1000">
          OUR PRODUCT
        </div>
        <div className="lg:mt-2" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-[40px] lg:text-4xl font-semibold">Products We Sell</h1>
        </div>
        <div className="py-16 min-w-full lg:flex lg:justify-center lg:gap-7">
          <div data-aos="fade-up" data-aos-duration="1000">
            <Link to="/products" className="cursor-pointer">
              <ProductCard
                content={{
                  title: "BIO DIESEL B-20 (HIGH SPEED DIESEL)",
                  imageUrl: oilBarrel,
                }}
              />
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <Link to="/products" className="cursor-pointer">
              <ProductCard
                content={{
                  title: "MARINE FUEL OIL (MFO-1)",
                  imageUrl: oilBarrel,
                }}
              />
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <Link to="/products" className="cursor-pointer">
              <ProductCard
                content={{
                  title: "MARINE DIESEL FUEL",
                  imageUrl: oilBarrel,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default Products;
