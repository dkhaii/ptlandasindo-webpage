import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-white sm:px-80 px-16 py-28 flex flex-row w-full">
      <div className="flex flex-col items-start w-full">
        <div className="flex justify-center bg-natural px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">LANDASINDO FUTURE</div>
        <h1 className="mt-2 text-[40px] lg:text-4xl font-semibold leading-[55px] sm:leading-[80px]">
          The Future Of <br /> Our Company
        </h1>
      </div>
      <div className="flex flex-row w-full gap-5">
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
