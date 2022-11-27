import React from "react";
import { Link } from "react-router-dom";
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
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 items-start" data-aos="fade-right" data-aos-duration="1000">
            <SectionTitle
              content={{
                subTitle: "GALLERY",
                title: "Gallery from Landasindo",
              }}
              bgColor={"bg-white"}
            />
          </div>
          <div className="mt-5 flex items-end" data-aos="fade-left" data-aos-duration="1000">
            <Link to="/gallery" className="btn btn-outline btn-accent text-lg px-16">LOAD MORE</Link>
          </div>
        </div>
        <div className="z-10" data-aos="fade-up" data-aos-duration="3000">
          <Carousel content={dataImg} />
        </div>
      </section>
    </>
  );
};

export default Gallery;
