import React, { useEffect } from "react";

const GalleryCard = (props) => {
  useEffect(() => {
    props.getImg(props.content.imageUrl);
  }, [props.open]);

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer" onClick={props.open}>
      <figure className="rounded-t-2xl">
        <img src={props.content.imageUrl} alt="gallery" className="hover:scale-110 duration-300" />
      </figure>
    </div>
  );
};

export default GalleryCard;
