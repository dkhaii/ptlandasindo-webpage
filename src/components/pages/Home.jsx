import React from "react";
import { Navbar, Hero, About, Products, Gallery, Contact, Footer } from "../";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <Navbar></Navbar>
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="w-full">
          <Hero></Hero>
        </div>
      </div>

      <div className="bg-white sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <Products></Products>
        </div>
      </div>

      <div className="bg-white sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <About></About>
        </div>
      </div>

      <div className="bg-base sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <Gallery></Gallery>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Contact></Contact>
        </div>
      </div>

      <div className="bg-white sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
