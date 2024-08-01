import Modal from "react-modal";
import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import modalstyles from "./ImageModal.module.css";

Modal.setAppElement("#root"); 
const { imageGallery } = styles;
 const { imageModalContent, imageModalOverlay} = modalstyles;

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={imageModalContent}
        overlayClassName={imageModalOverlay}

      >
        {selectedImage && (
          <div style={{ position: 'relative' }}>
            <img 
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description}
              style={{ maxHeight: '80vh', maxWidth: '80vw', objectFit: 'contain' }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};
export default ImageGallery;
