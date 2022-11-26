import React from "react";
import { Navbar, HeadingPage, GallerySection, Footer } from "../";
import { TabTitle } from "../../../utils/GeneralFunction";

const Gallery = () => {
  TabTitle("Gallery - PT Landasindo Sahu Baruna Jaya");

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
              title: "To be a pioneer and a trusted bunker service company in Indonesia",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <GallerySection />
        </div>
      </div>

      {/* <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Contact />
        </div>
      </div> */}

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <Footer
            color={{
              bgColor: "bg-darker",
              textColor: "text-white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
