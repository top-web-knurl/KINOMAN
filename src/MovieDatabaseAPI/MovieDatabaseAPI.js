import axios from "axios";
import { API_KEY } from "./settings";

const language = '&language=ru-RU&region=ru';
export const baseUrl = 'https://api.themoviedb.org/3';
export const baseImageUrl = 'http://image.tmdb.org/t/p/';
export const imageUrlOriginal = `${baseImageUrl}original`;
export const imageUrlW780 = `${baseImageUrl}w780`;
export const imageUrlW500 = `${baseImageUrl}w500`;
export const imageUrlW342 = `${baseImageUrl}w342`;
export const imageUrlW185 = `${baseImageUrl}w185`;
export const imageUrlW92 = `${baseImageUrl}w92`;

const getResource = async (url) => {
    return await axios.get(`${baseUrl}${url}`)
        .then(res => res.data)
        .then(data => data)
        .catch(err => console.log(`УПС =( ${err}`))
}
// получаем фильм по id
export const getMovieOnId = async (id) => {
    return await getResource(`/movie/${id}?api_key=${API_KEY}${language}`)
}
// получаем трейлер фильма по id
export const getMovieVideoOnId = async (id) => {
    return await getResource(`/movie/${id}/videos?api_key=${API_KEY}${language}`)
}

