import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=5e1540d5ab73ca6abba3993527b5288a';

async function getTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day?${API_KEY}`;
  return await axios.get(url).then(({ data }) => data.results);
}

async function getSearchedMovies(query) {
  const url = `${BASE_URL}/search/movie?${API_KEY}&query=${query}`;
  return await axios.get(url).then(({ data }) => data.results);
}

async function getMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?${API_KEY}`;
  return await axios.get(url).then(({ data }) => data);
}

async function getReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?${API_KEY}`;
  return await axios.get(url).then(({ data }) => data.results);
}

async function getCast(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?${API_KEY}`;
  return await axios.get(url).then(({ data }) => data.cast);
}

export {
  getTrendingMovies,
  getSearchedMovies,
  getMovieDetails,
  getReviews,
  getCast,
};
