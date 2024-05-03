const Movie = require("../models/Movie")


module.exports = {
  moviesGet: async () => {
    return await Movie.find()
  },

  moviesPost: async (movie) => {

    const newMovie = new Movie(movie)
    const savedMovie = await newMovie.save()
    return savedMovie
  }
}





