const axios = require("axios");

const fetchMovieDetails = async (movieId) => {
  const API_KEY = process.env.OMDB_API_KEY;
  const url = `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchMovieDetails };
