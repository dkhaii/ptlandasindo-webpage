import React from "react";
import { Navbar, HeadingMap, ContactList, Footer } from "../";
import { TabTitle } from "../../../utils/GeneralFunction";

const ContactUs = () => {
  TabTitle("Contact Us - PT Landasindo Sahu Baruna Jaya");

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
            hamburgerColor={{
              noScroll: "#03254c",
              isScroll: "#03254c",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <HeadingMap />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full">
          <ContactList />
        </div>
      </div>

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

export default ContactUs;
