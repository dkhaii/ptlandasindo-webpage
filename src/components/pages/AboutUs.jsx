import React from "react";
import { Navbar, HeroImage, HeadingPage, Services, Description, Contact, Footer } from "../";
import gambar4 from "../../assets/images/gambar4.jpg";

const AboutUs = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Navbar
            classes={{
              transition: "",
              bg: "bg-white",
              textScroll: "text-secondary",
              textStatic: "text-secondary",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <HeadingPage
            content={{
              title: "Ready to compete with global market with high quality and good service",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <HeroImage content={{ imageUrl: gambar4 }} />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Services></Services>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Description></Description>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Contact></Contact>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
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

export default AboutUs;
