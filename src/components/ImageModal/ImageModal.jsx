import Modal from "react-modal";
import { useState } from "react";

// Налаштування елемента додатка для забезпечення доступності
Modal.setAppElement("#root"); // або інший кореневий елемент вашого додатка


const ImageModal = () => {
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
    );
};
export default ImageModal;