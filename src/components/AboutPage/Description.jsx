import React from "react";
import gambar5 from "../../assets/images/gambar5.jpg";

const Description = () => {
  return (
    <section id="deskription" className="bg-base flex flex-col-reverse md:flex-row w-full md:gap-10">
      <div className="flex flex-col xl:pl-80 md:px-40 px-16 py-20 w-full justify-center">
        <h1 className="font-semibold text-secondary text-4xl my-5">PT. Landasindo Sahu Baruna Jaya</h1>
        <p className="text-dimBlue text-justify text-[10px] lg:text-[14px] leading-loose">
          Dictum at tempor commodo ullamcorper a. Facilisis mauris sit amet massa vitae tortor condimentum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Nec feugiat in fermentum posuere urna nec tincidunt praesent
          semper. Platea dictumst quisque sagittis purus sit. Tellus in hac habitasse platea dictumst vestibulum. Eget gravida cum sociis natoque penatibus et. Arcu odio ut sem nulla pharetra diam sit amet. Massa eget egestas purus viverra
          accumsan in. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Fermentum leo vel orci porta. Enim ut sem viverra aliquet eget. <br /> Eu sem integer vitae justo eget magna fermentum. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae proin sagittis nisl rhoncus mattis rhoncus
          urna neque. Tortor id aliquet lectus proin nibh. Libero justo laoreet sit amet cursus sit amet. Est lorem ipsum dolor sit. Porttitor massa id neque aliquam. Molestie ac feugiat sed lectus vestibulum mattis. Netus et malesuada
          fames ac turpis egestas. Sit amet commodo nulla facilisi. Facilisis leo vel fringilla est ullamcorper eget.
        </p>
      </div>
      <div className="w-full">
        <img src={gambar5} alt="gambar5" className="w-full h-full object-cover"/>
      </div>
    </section>
  );
};

export default Description;
