import React from "react";
import { Navbar, Hero, About, Products, Gallery, Contact, Footer } from "../";
import { TabTitle } from "../../../utils/GeneralFunction";

const Home = () => {
  TabTitle("Home - PT Landasindo Sahu Baruna Jaya");

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Navbar
            classes={{
              transition: "fade-in",
              bg: "",
              textScroll: "text-secondary",
              textStatic: "text-white",
            }}
          ></Navbar>
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="w-full">
          <Hero></Hero>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center w-full">
        <div className="w-full">
          <Products></Products>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center w-full">
        <div className="w-full">
          <About></About>
        </div>
      </div>

      <div className="bg-base flex justify-center items-center w-full">
        <div className="w-full">
          <Gallery></Gallery>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Contact></Contact>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center w-full">
        <div className="w-full">
          <Footer
            color={{
              bgColor: "bg-white",
              textColor: "text-secondary",
            }}
          ></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
