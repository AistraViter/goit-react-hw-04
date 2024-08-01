import Modal from "react-modal";
import modalstyles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
    const { imageModalContent, imageModalOverlay, imageModalContainer } =
    modalstyles;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={imageModalContent}
      overlayClassName={imageModalOverlay}
    >
      {
        selectedImage && (
          <div className={imageModalContainer} onClick={onRequestClose}>
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description}
              onClick={(e) => e.stopPropagation()} // Зупиняє подію закриття при кліку на зображення
            />
          </div>
        )
      }
    </Modal>
)};
export default ImageModal;
