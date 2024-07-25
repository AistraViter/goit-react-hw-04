import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchArticles } from "../../src/gallery-api";
import styles from "./App.module.css";
const { container, header } = styles;

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getArticles() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchArticles("frog");
  //       setArticles(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getArticles();
  // }, []);

  const handleSearch = async (newtopic) => {
    try {
      setLoading(true);
      setArticles([]);
      setError(false);
      const data = await fetchArticles(newtopic);
      setArticles(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }  };
  return (
    <div className={container}>
      <header className={header}>
        <SearchBar onSearch={handleSearch}/>
      </header>

      {loading && <Loader />}
      {error && <ErrorMessage />}
      {Array.isArray(articles) && articles.length > 0 && <ImageGallery items={articles} />}
    </div>
  );
}

export default App;
