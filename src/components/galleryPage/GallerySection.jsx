import React, { useState } from "react";
import { GalleryCard, ImageModal } from "../";

const GallerySection = () => {
  const [isModal, setIsModal] = useState(false);
  const [image, setImage] = useState("");

  const getImg = (imageUrl) => {
    setImage(imageUrl);
  };

  return (
    <section id="gallery-section" className="bg-base xl:px-60 md:px-40 px-16 py-28 flex flex-row w-full">
      <div className="flex flex-wrap justify-center w-full gap-5">
        <GalleryCard
          content={{
            imageUrl: "https://placeimg.com/400/225/arch",
            title: "Judul Gambar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          }}
          open={() => setIsModal(true)}
          getImg={getImg}
        ></GalleryCard>
        <ImageModal open={isModal} close={() => setIsModal(false)} image={image} />

        <GalleryCard
          content={{
            imageUrl: "https://placeimg.com/400/225/arch",
            title: "Judul Gambar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          }}
          open={() => setIsModal(true)}
          getImg={getImg}
        />
        <ImageModal open={isModal} close={() => setIsModal(false)} image={image} />

        <GalleryCard
          content={{
            imageUrl: "https://placeimg.com/400/225/arch",
            title: "Judul Gambar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          }}
          open={() => setIsModal(true)}
          getImg={getImg}
        />
        <ImageModal open={isModal} close={() => setIsModal(false)} image={image} />

        <GalleryCard
          content={{
            imageUrl: "https://placeimg.com/400/225/arch",
            title: "Judul Gambar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          }}
          open={() => setIsModal(true)}
          getImg={getImg}
        />
        <ImageModal open={isModal} close={() => setIsModal(false)} image={image} />

        <GalleryCard
          content={{
            imageUrl: "https://placeimg.com/400/225/arch",
            title: "Judul Gambar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          }}
          open={() => setIsModal(true)}
          getImg={getImg}
        />
        <ImageModal open={isModal} close={() => setIsModal(false)} image={image} />

        <GalleryCard
          content={{
            imageUrl: "https://placeimg.com/400/225/arch",
            title: "Judul Gambar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          }}
          open={() => setIsModal(true)}
          getImg={getImg}
        />
        <ImageModal open={isModal} close={() => setIsModal(false)} image={image} />
      </div>
    </section>
  );
};

export default GallerySection;
