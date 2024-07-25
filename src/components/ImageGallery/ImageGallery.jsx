import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
const { imageGallery } = styles;

const ImageGallery = ({ items }) => {
  return (
    <ul className={imageGallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
