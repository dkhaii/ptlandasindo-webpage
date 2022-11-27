import React, { useState } from "react";
import CloseIcon from "../../assets/svg/close.svg";

const ImageModal = (props) => {
  if (!props.open) {
    return null;
  }

  return (
    <div className="fixed inset-0 overlay z-30 p-20 flex flex-col justify-center items-center fade-in">
      <img src={CloseIcon} alt="close-icon" onClick={props.close} className="fixed top-10 right-10 cursor-pointer" />
      <img src={props.image} alt="gallery" />
    </div>
  );
};

export default ImageModal;
