import React from "react";

const GalleryCard = (props) => {
  const onClickHandle = () => {
    props.getImg(props.content.imageUrl);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer" onClick={props.open}>
      <figure className="rounded-t-2xl">
        <img src={props.content.imageUrl} alt="gallery" className="hover:scale-110 duration-300" onClick={onClickHandle} />
      </figure>
    </div>
  );
};

export default GalleryCard;
