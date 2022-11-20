import React from "react";
import { NavNormal, HeadingAbout, HeadingImage, Services, Description, Contact, Footer } from "../";

const AboutUs = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <NavNormal></NavNormal>
        </div>
      </div>

      <div className="sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <HeadingAbout></HeadingAbout>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <HeadingImage></HeadingImage>
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
      <div className="bg-white sm:px-40 px-16 flex justify-center items-center w-full">
        <div className="w-full">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
