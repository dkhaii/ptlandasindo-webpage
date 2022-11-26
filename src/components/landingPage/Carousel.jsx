import React, { useEffect, useState } from "react";

const Carousel = ({ content }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const length = content.length;

  useEffect(() => {
    setImgIndex(0);
  }, []);

  const next = () => {
    if (imgIndex === length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const prev = () => {
    if (imgIndex === 0) {
      setImgIndex(length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  console.log(imgIndex);

  if (!Array.isArray(content) || content.length <= 0) {
    return null;
  }

  console.log("karusel", content);
  return (
    <div className="relative w-full h-[640px] rounded-xl shadow-lg">
      <div className="absolute text-[40px] top-2/4 bg-natural flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer left-[15px] hover:bg-slate-400 duration-300" onClick={prev}>
        &lsaquo;
      </div>
      <div className="absolute text-[40px] top-2/4 bg-natural flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer right-[15px] hover:bg-slate-400 duration-300" onClick={next}>
        &rsaquo;
      </div>

      {content.map((slide, i) => {
        return <div key={i}>{i === imgIndex && <img src={slide.imgUrl} alt="carousel" className="absolute object-cover w-full h-[640px] rounded-xl -z-10" />}</div>;
      })}
    </div>
  );
};

export default Carousel;
