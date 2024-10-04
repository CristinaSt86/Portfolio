import React, { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import css from "./LightboxGallery.module.css";
import Modal from "../Modal/Modal";

export const LightboxGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const galleryRef = useRef(null);

  const galleryImages = images.map((imgSrc) => ({
    original: imgSrc,
    thumbnail: imgSrc,
    originalClass: css.imgFit,
    thumbnailClass: css.imgFit,
  }));

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleFullScreen = () => {
    if (galleryRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        galleryRef.current.requestFullScreen();
      }
    }
  };

  return (
    <div>
      <div className={css.galleryContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className={`${css.thumbnail} cursor-pointer hover:opacity-75 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div ref={galleryRef} className={css.fullscreenWrapper}>
          <ImageGallery
            items={galleryImages}
            startIndex={photoIndex}
            showThumbnails={false}
            onSlide={(currentIndex) => setPhotoIndex(currentIndex)}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={true}
            onFullScreen={handleFullScreen}
            showIndex={false}
            showBullets={true}
          />
        </div>
      </Modal>
    </div>
  );
};

export default LightboxGallery;
