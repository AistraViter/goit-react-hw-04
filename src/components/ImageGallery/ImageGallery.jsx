import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal"; // Імпортуємо компонент ImageModal

import styles from "./ImageGallery.module.css";

const { imageGallery } = styles;

const ImageGallery = ({ items }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <ul className={imageGallery}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard image={item} onClick={() => openModal(item)} />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};
export default ImageGallery;
