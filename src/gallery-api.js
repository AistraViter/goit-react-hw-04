import axios from "axios";

const API_KEY = "FMIJ5k-c5lppvR6WpV4KaIibT-R7gUAfjxBmMzlKrlI";

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchImages(query, page) {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      page: page,
      per_page: 12,
      query: query,
    },
  });
  return data;
}
