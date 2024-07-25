import styles from "./ImageCard.module.css";
const { imageCard } = styles;
const ImageCard = ({ image }) => {
  return (
    <div className={imageCard}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};
export default ImageCard;
