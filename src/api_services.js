import axios from "axios"

const api_key = '551b5e28e1cf24ed06e5d4ffad89edae'


export default {
  async getMovies() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`);
      console.log('response', response)
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getMovieByID(id) {
    try {
      const response = axios.get(`https://api.themoviedb.org/3/trending/movie/${id}/day?api_key=${api_key}`);
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  },
}
