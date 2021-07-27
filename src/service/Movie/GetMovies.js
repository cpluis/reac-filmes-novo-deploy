import { api } from "../../config";

async function GetMovies(movie) {
  try {
    const response = await api.get(`/?apikey=bb4cf383&s=${movie}`);
    return response.data.Search;
  } catch (err) {
    alert(err);
  }
}

export default GetMovies;