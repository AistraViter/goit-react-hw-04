import styles from "./ImageCard.module.css";
const { imageCard } = styles;
const ImageCard = ({ image }) => {
  let orientation;

  if (
    Math.abs(image.width - image.height) <
    0.1 * Math.max(image.width, image.height)
  ) {
    orientation = "squarish";
  } else if (image.width > image.height) {
    orientation = "landscape";
  } else {
    orientation = "portrait";
  }
  return (
    <div className={imageCard}>
      <img src={image.urls.small} alt={image.alt_description} />
      <span>{orientation}</span>
    </div>
  );
};
export default ImageCard;
