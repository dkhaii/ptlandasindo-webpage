import React from "react";
import BgContact from "../../assets/images/gambar2.jpg";

const Contact = () => {
  return (
    <section id="contact" className="flex w-full h-[300px]">
      <div className="">
        <div className="absolute w-full h-[300px] bg-secondary bg-opacity-90"></div>
        <img src={BgContact} alt="" className="object-none object-center w-full" />
      </div>
      <div className="absolute xl:px-80 md:px-40 px-16 flex flex-col lg:flex-row w-full py-10 lg:py-20">
        <div className="flex-1">
          <h1 className="text-white font-semibold text-4xl lg:text-5xl py-3">Get In Touch</h1>
          <p className="text-white text-sm lg:text-xl leading-relaxed py-3">
            if you want to get in contact with us, <br /> feel free to use the contact form on this webpage.
          </p>
        </div>
        <div className="flex items-center">
          <button className="btn btn-accent text-base lg:text-lg lg:px-16">CONTACT US</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
