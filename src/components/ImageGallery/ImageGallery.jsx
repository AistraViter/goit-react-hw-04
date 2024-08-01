import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const { imageGallery } = styles;

const ImageGallery = ({ items, openModal }) => {

  return (
    <div>
      <ul className={imageGallery}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard image={item} onClick={() => openModal(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ImageGallery;
