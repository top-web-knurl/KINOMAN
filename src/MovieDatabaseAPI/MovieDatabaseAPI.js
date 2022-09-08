import axios from "axios";
import { API_KEY } from "./constants";

export const baseUrl = 'https://api.themoviedb.org/3';
export const baseImageUrl = 'http://image.tmdb.org/t/p/';

const getResource = async (url) => {
   return await axios.get(`${baseUrl}${url}`)
   .then(res => res.data)
   .then(data => data)
   .catch(err =>  console.log(`УПС =( ${err}`))
}
export const getMovieOnId = async (id) => {
    return await getResource(`/movie/${id}?api_key=${API_KEY}&language=ru-RU&region=ru`)
}

