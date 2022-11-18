import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import logo from "../assets/images/landasindo.png";

const Navbar = () => {
  const [trigger, setTrigger] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "transition_opacity bg-white shadow-lg fixed left-0 sm:px-40 px-16 w-full py-8 flex justify-between items-center z-20" : "fixed left-0 sm:px-40 px-16 w-full py-8 flex justify-between items-center z-20"}>
      <div className={color ? "flex font-poppins font-semibold text-md text-secondary" : "flex font-poppins font-semibold text-sm text-white"}>
        <img src={logo} alt="logo-nav" className="w-10"/>
        <h1>PT. Landasindo</h1>
      </div>
      <div className={color ? "flex font-poppins font-semibold text-sm text-secondary" : "flex font-poppins font-semibold text-sm text-white"}>
        <ul className="hidden list-none lg:flex justify-end items-center flex-none">
          <li className="mr-10">
            <Link to="/" className="transition duration-300 hover:text-accent">
              HOME
            </Link>
          </li>
          <li className="mr-10">
            <Link to="/about-us" className="transition duration-300 hover:text-accent">
              ABOUT US
            </Link>
          </li>
          <li className="mr-10">
            <Link to="/products" className="transition duration-300 hover:text-accent">
              PRODUCT
            </Link>
          </li>
          <li className="mr-10">
            <Link to="/gallery" className="transition duration-300 hover:text-accent">
              GALLERY
            </Link>
          </li>
          <li className="">
            <Link to="/contact-us" className="transition duration-300 hover:text-accent">
              CONTACT US
            </Link>
          </li>
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <Hamburger size={24} color={color ? "#03254c" : "#fff"} onToggle={() => setTrigger((prev) => !prev)} rounded />
          <div
            className={trigger ? "flex justify-center p-6 bg-white absolute top-24 right-0 min-w-full shadow-lg sidebar text-secondary" : "hidden justify-center p-6 bg-white absolute top-24 right-0 min-w-full shadow-lg sidebar text-white"}
          >
            <ul className="list-none flex flex-col justify-center items-center">
              <li className="mb-4">
                <Link to="/" className="transition duration-300 hover:text-accent">
                  HOME
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/about-us" className="transition duration-300 hover:text-accent">
                  ABOUT US
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/products" className="transition duration-300 hover:text-accent">
                  PRODUCT
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/gallery" className="transition duration-300 hover:text-accent">
                  GALLERY
                </Link>
              </li>
              <li className="/contact-us">
                <Link to="" className="transition duration-300 hover:text-accent">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
