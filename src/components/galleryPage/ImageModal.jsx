import React from "react";

const ImageModal = (props) => {
  if (!props.open) {
    return null;
  }

  return (
    <div className="fixed top-1/2 left-1/2 bg-white">
      <button onClick={props.close}>close</button>
      <img src={props.image} alt="gallery" />
    </div>
  );
};

export default ImageModal;
