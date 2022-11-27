import React from "react";
import { Link } from "react-router-dom";
import BgContact from "../../assets/images/gambar2.jpg";

const Contact = () => {
  return (
    <section id="contact" className="flex w-full h-[300px]">
      <div className="absolute w-full h-[300px] bg-secondary bg-opacity-90"></div>
      <img src={BgContact} alt="contactBg" className="object-cover w-full h-[300px]" />

      <div className="absolute xl:px-60 lg:px-40 sm:px-16 px-5 flex flex-col lg:flex-row w-full py-10 lg:py-20">
        <div className="flex flex-col items-center lg:items-start w-full" data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-white font-semibold text-4xl lg:text-5xl py-3">Get In Touch</h1>
          <p className="text-white text-sm lg:text-xl leading-relaxed py-3">
            if you want to get in contact with us, <br /> feel free to use the contact form on this webpage.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end lg:items-center w-full" data-aos="fade-left" data-aos-duration="1000">
          <Link to="/contact-us" className="btn btn-accent text-base lg:text-lg lg:px-16">CONTACT US</Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
