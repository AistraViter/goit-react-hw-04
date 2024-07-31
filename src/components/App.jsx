import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "../../src/gallery-api";
import styles from "./App.module.css";
const { container, header } = styles;

function App({ errorMessage }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (newTopic) => {
    setImages([]);
    setTopic(newTopic);
    setPage(1);
  };

  const handleLoadMore = () => {
    if (page < Math.min(totalPages, 200)) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (!topic) return; // Перевірка на порожній topic
    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(topic, page, errorMessage);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
        setTotalPages(data.total_pages);
        if (page === Math.min(data.total_pages, 200)) {
          toast.success(
            errorMessage ||
              "We're sorry, but you've reached the end of search results."
          );
        }
        if (data.results.length === 0) {
          toast.error(
            errorMessage ||
              "Sorry, there are no images matching your search query. Please try again!"
          );
        }

        setLoadMore(page < Math.min(data.total_pages, 200)); // Set loadMore only if there are more pages to load
      } catch (error) {
        setError(true);
        toast.error(
          errorMessage ||
            "Oops! An error occurred while fetching the images. Please try again!"
        );
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [topic, page, errorMessage]);

  return (
    <div>
      <header className={header}>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className={container}>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && <ImageGallery items={images} />}
        {loadMore && page < totalPages && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        {<Toaster />}
      </div>
    </div>
  );
}

export default App;
