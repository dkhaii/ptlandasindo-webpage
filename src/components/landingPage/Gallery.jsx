import React from "react";
import { SectionTitle, Carousel } from "../";
import gambar1 from "../../assets/images/gambar1.jpg";
import gambar2 from "../../assets/images/gambar2.jpg";
import gambar3 from "../../assets/images/gambar3.jpg";
import gambar4 from "../../assets/images/gambar4.jpg";
import gambar5 from "../../assets/images/gambar5.jpg";

const Gallery = () => {
  const dataImg = [
    {
      imgUrl: gambar1,
    },
    {
      imgUrl: gambar2,
    },
    {
      imgUrl: gambar3,
    },
    {
      imgUrl: gambar4,
    },
    {
      imgUrl: gambar5,
    },
  ];

  return (
    <>
      <section id="gallery" className="xl:px-60 lg:px-40 sm:px-16 px-5 py-28 bg-base flex flex-col w-full gap-20 ">
        <div className="flex flex-row items-center">
          <div className="flex-1 items-start">
            <SectionTitle
              content={{
                subTitle: "GALLERY",
                title: "Gallery from Landasindo",
              }}
              bgColor={"bg-white"}
            />
          </div>
          <div className="mt-5 flex items-end">
            <button className="btn btn-outline btn-accent text-lg px-16">LOAD MORE </button>
          </div>
        </div>
        <div className="z-10">
          <Carousel content={dataImg} />
        </div>
      </section>
    </>
  );
};

export default Gallery;
