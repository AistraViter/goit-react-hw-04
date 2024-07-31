import Modal from "react-modal";
import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

// Налаштування елемента додатка для забезпечення доступності
Modal.setAppElement("#root"); // або інший кореневий елемент вашого додатка

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
            <ImageCard
              image={item}
              onClick={() => openModal(item)}
              style={{ cursor: "pointer" }}
            />
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        {selectedImage && (
          <div>
            <h2>{selectedImage.title}</h2>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};
export default ImageGallery;
