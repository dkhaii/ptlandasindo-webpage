import React from "react";
import gambar4 from "../../assets/images/gambar4.jpg";

const HeadingImage = () => {
  return (
    <section id="heading-image" className="w-full h-[680px]">
        <div className="-z-10">
            <img src={gambar4} alt="gambar4" className="object-cover w-full"/>
        </div>
    </section>
    );
};

export default HeadingImage;
