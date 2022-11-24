import React from "react";
import SectionTitle from "../landingPage/SectionTitle";

const Services = () => {
  return (
    <section id="services" className="bg-white xl:px-80 md:px-40 px-16 py-28 flex flex-row w-full">
      <div className="flex flex-col items-start w-[400px]">
        <SectionTitle
          content={{
            subTitle: "LANDASINDO FUTURE",
            title: "The Future Of Our Company",
          }}
        />
      </div>
      <div className="flex justify-end flex-row w-full gap-5">
        <div className="card w-96 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title text-secondary text-2xl">Vission</h2>
            <p className="text-justify text-dimBlue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card w-96 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title text-secondary text-2xl">Mission</h2>
            <p className="text-justify text-dimBlue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
