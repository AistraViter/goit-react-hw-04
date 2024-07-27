import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchImages } from "../../src/gallery-api";
import styles from "./App.module.css";
const { container, header } = styles;

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (newtopic) => {
    try {
      setLoading(true);
      setImages([]);
      setError(false);
      const data = await fetchImages(newtopic, 2);
      setImages(data);
      console.log("Images updated:", data);

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <header className={header}>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className={container}>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && <ImageGallery items={images} />}
      </div>
    </div>
  );
}

export default App;

// useEffect(() => {
//   async function getImages() {
//     try {
//       setLoading(true);
//       const data = await fetchImages("frog");
//       setImages(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }
//   getImages();
// }, []);

// useEffect(() => {
//   console.log("Images updated:", images);
// }, [images]);
