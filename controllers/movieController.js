const { fetchMovieDetails,fetchSearchedMovies } = require("../services/movieService");

const getMovieDetails = async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await fetchMovieDetails(movieId);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
};

const searchMovies = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res
        .status(400)
        .json({ error: "Missing required 'title' query parameter" });
    }
    console.log("title from query", title)
    const movie = await fetchSearchedMovies(title);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie from search" });
  }
};

module.exports = { getMovieDetails, searchMovies };
