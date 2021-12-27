import axios from 'axios';

const BASE_URL =
  'https://api.themoviedb.org/3';

const key =
  '8bd0a9b204e3ff7350ab6e4b8a831ab0';

export const POSTER_URL =
  'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = BASE_URL;

async function fetchWithErrorHandling(
  url = '',
  config = {},
) {
  const response = await fetch(
    url,
    config,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(
        new Error('Not found'),
      );
}

//запросы на списки популярных фильмов
function fetchTrendingMovies(page) {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?page=${page}&api_key=${key}`,
  );
}

//запросы на фильм   /search/movie
function fetchMoviesByName(name, page) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${key}&query=${name}&page=${page}&language=en-US&page=1&include_adult=false`,
  );
}

//запросы на фильм
//  /movie/{movie_id}
function fetchMovieDetails(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${key}&language=en-US`,
  );
}

//запросы на /credits актерский состав
// GET   /movie/{movie_id}/credits

function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${key}&language=en-US`,
  );
}

//запросы на /reviews
//  /movie/{movie_id}/reviews

function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${key}&language=en-US`,
  );
}

export {
  fetchTrendingMovies,
  fetchMoviesByName,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
