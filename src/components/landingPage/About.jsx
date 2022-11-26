import React from "react";
import gambar1 from "../../assets/images/gambar1.jpg";
import ornamen from "../../assets/svg/dotOrnament.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className="xl:px-60 lg:px-40 sm:px-16 px-5 pt-28 lg:flex lg:flex-col w-full min-h-screen">
      <div className="flex-1 flex items-center md:items-start flex-col">
        <SectionTitle
          content={{
            subTitle: "OUR BUSINESS",
            title: "About Us",
          }}
          bgColor={"bg-natural"}
        />
        <div className="py-20 flex flex-col lg:flex-row lg:gap-10">
          <div className="relative flex justify-center mb-5">
            <img src={gambar1} alt="gambar1" className="w-80 lg:w-96 rounded-xl shadow-xl z-10" />
            <img src={ornamen} alt="ornamen1" className="absolute -top-10 -left-10" />
            <img src={ornamen} alt="ornamen1" className="absolute -bottom-10 -right-10" />
          </div>
          <div className="flex-1 flex items-center">
            <p className="text-justify text-[12px] lg:text-[16px] leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Sed vulputate mi sit amet. Fames ac
              turpis egestas integer eget aliquet nibh praesent tristique. Donec ultrices tincidunt arcu non sodales neque sodales ut. Dui nunc mattis enim ut tellus elementum. Eget mauris pharetra et ultrices neque ornare aenean euismod.
              Elit scelerisque mauris pellentesque pulvinar. Magna sit amet purus gravida quis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Tincidunt
              ornare massa eget egestas purus viverra. Velit laoreet id donec ultrices tincidunt arcu. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Amet nulla facilisi morbi tempus iaculis urna id.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor. Condimentum vitae sapien pellentesque habitant morbi
              tristique senectus et. Etiam sit amet nisl purus in mollis nunc sed. Pellentesque habitant morbi tristique senectus et. Rhoncus dolor purus non enim praesent elementum facilisis. Sapien eget mi proin sed libero enim sed
              faucibus turpis. Sem viverra aliquet eget sit amet. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Id donec ultrices tincidunt arcu non sodales neque sodales. Risus quis varius quam quisque id diam.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-20 flex flex-col-reverse lg:flex-row lg:gap-10">
          <div className="flex-1 flex items-center">
            <p className="text-justify text-[12px] lg:text-[16px] leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Sed vulputate mi sit amet. Fames ac
              turpis egestas integer eget aliquet nibh praesent tristique. Donec ultrices tincidunt arcu non sodales neque sodales ut. Dui nunc mattis enim ut tellus elementum. Eget mauris pharetra et ultrices neque ornare aenean euismod.
              Elit scelerisque mauris pellentesque pulvinar. Magna sit amet purus gravida quis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Tincidunt
              ornare massa eget egestas purus viverra. Velit laoreet id donec ultrices tincidunt arcu. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Amet nulla facilisi morbi tempus iaculis urna id.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor. Condimentum vitae sapien pellentesque habitant morbi
              tristique senectus et. Etiam sit amet nisl purus in mollis nunc sed. Pellentesque habitant morbi tristique senectus et. Rhoncus dolor purus non enim praesent elementum facilisis. Sapien eget mi proin sed libero enim sed
              faucibus turpis. Sem viverra aliquet eget sit amet. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Id donec ultrices tincidunt arcu non sodales neque sodales. Risus quis varius quam quisque id diam.
            </p>
          </div>
          <div className="relative flex justify-center mb-5">
            <img src={gambar1} alt="gambar1" className="w-80 lg:w-96 rounded-xl shadow-xl z-10" />
            <img src={ornamen} alt="ornamen1" className="absolute -top-10 -left-10" />
            <img src={ornamen} alt="ornamen1" className="absolute -bottom-10 -right-10" />
          </div>
        </div>
      </div>
      {/* <div className="divider"></div> */}
    </section>
  );
};

export default About;
