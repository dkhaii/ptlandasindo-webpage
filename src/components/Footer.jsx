import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "./";
import logo from "../assets/images/landasindo.png";

const Footer = ({color}) => {
  console.log(color)
  return (
    <section id="footer" className={`${color.bgColor} sm:px-80 px-16 w-full`}>
      <div className={`flex flex-col lg:flex-row ${color.textColor}`}>
        <div className="py-10 pr-20 w-full">
          <div className="flex">
            <img src={logo} alt="" className="w-14" />
            <h1 className="flex items-center ml-3 text-lg font-semibold">PT. Landasindo</h1>
          </div>
          <p className="pt-5 text-sm leading-loose">
            Graha SISTRACO, 3rd floor <br /> Jl. Perak Barat No. 75 Surabaya 60177, <br /> Jawa Timur, Indonesia
          </p>
          <div className="mt-5 flex text-sm gap-10">
            <h1 className="font-semibold">Phone</h1>
            <p>
              +62 31 357 3036 (Hunting) <br /> +62 31 353 9972 <br /> +62 31 353 9973 <br /> +62 31 357 3037
            </p>
          </div>
          <div className="mt-5 flex text-sm gap-10">
            <h1 className="font-semibold">Email</h1>
            <p>sales@landasindo.co.id</p>
          </div>
        </div>

        <div className="py-10 pr-20 lg:px-20 w-full">
          <h1 className="font-semibold">About</h1>
          <p className="pt-5 text-sm leading-loose">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        <div className="py-10 pr-20 lg:pl-20 w-full">
          <h1 className="font-semibold">Company</h1>
          <div className="mt-5 flex text-sm gap-10">
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="transition duration-300 hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="transition duration-300 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/product" className="transition duration-300 hover:text-accent">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition duration-300 hover:text-accent">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="transition duration-300 hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-10 pr-20 lg:px-20 w-full">
          <h1 className="font-semibold">Social Media</h1>
          <p className="pt-5 text-sm leading-loose">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    <div className={`flex justify-center lg:justify-end py-5 ${color.textColor}`}>Copyright © Landasindo. All Rights Reserved</div>
    </section>
  );
};

export default Footer;
