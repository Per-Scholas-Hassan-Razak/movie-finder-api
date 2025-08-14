const {fetchMovieDetails}  = require('../services/movieService')

const getMovieDetails = async (req, res) => {
    try{
        const movieId = req.params.id;
        const response = await fetchMovieDetails(movieId);
        res.json(response)
    }catch(error){
        res.status(500).json({error:"Failed to fetch movie details"})
    }

}

module.exports = {getMovieDetails}