import axios from "axios";

const API_KEY = "FMIJ5k-c5lppvR6WpV4KaIibT-R7gUAfjxBmMzlKrlI";

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchImages(query) {
  if (!query || query.trim() === "") {
    throw new Error("Query parameter is required");
  }
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      per_page: 24,
      query: query,
    },
  });
  return data.results;
}
