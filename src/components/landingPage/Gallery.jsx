import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="sm:px-40 px-16 bg-base py-28 flex flex-col w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-start">
          <div className="flex justify-center bg-white px-3 py-2 rounded-lg text-[12px] lg:text-sm font-bold">GALLERY</div>
          <div className="lg:mt-2">
            <h1 className="text-[40px] lg:text-4xl font-semibold">Gallery from Landasindo</h1>
          </div>
        </div>
        <div className="mt-5 flex items-end">
          <button className="btn btn-outline btn-accent text-lg px-16">LOAD MORE </button>
        </div>
      </div>
      <div className="carousel w-full rounded-xl mt-20 hidden lg:flex">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
