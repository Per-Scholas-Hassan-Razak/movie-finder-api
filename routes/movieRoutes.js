const express = require("express");
const router = express.Router();
const { getMovieDetails } = require("../controllers/movieController");

router.get("/movies/:id", getMovieDetails)


module.exports = router;
