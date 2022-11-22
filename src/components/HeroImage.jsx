import React from "react";

const HeroImage = ({ content }) => {
  return (
    <section id="heading-image" className="w-full h-[680px]">
      <div className="-z-10">
        <img src={content.imageUrl} alt="heroBg" className="object-cover w-full" />
      </div>
    </section>
  );
};

export default HeroImage;
