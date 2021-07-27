import { api } from "../../config";

async function GetDetailsMovie(idMovie) {
  try {
    const response = await api.get(`/?apikey=bb4cf383&i=${idMovie}`);

    return response.data;
  } catch (error) {
    alert(error);
  }
}

export default GetDetailsMovie;