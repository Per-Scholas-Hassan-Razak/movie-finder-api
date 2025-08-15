const express = require("express");
const router = express.Router();
const { getMovieDetails, searchMovies } = require("../controllers/movieController");

router.get("/movies/:id", getMovieDetails)

router.get('/search', searchMovies)


module.exports = router;
