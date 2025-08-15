const axios = require("axios");
const API_KEY = process.env.OMDB_API_KEY;


const fetchMovieDetails = async (movieId) => {
  const url = `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

const fetchSearchedMovies = async (title) => {
 console.log("OMDB API KEY:", process.env.OMDB_API_KEY); 
 console.log("called search movie request");

  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
    title
  )}&apikey=${API_KEY}`;
  console.log("Calling URL:", url);
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchMovieDetails, fetchSearchedMovies };
