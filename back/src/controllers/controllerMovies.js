const { moviesGet, moviesPost} = require("../services/serviceMovies");

const getMovies = async (req, res) => {
    try {
        const movies = await moviesGet()
        res
            .status(200)
            .json(movies);
    } catch (error) {
        res
            .status(500)
            .json({
                message: 'Error al obtener los datos',
                error: error.message
            });
    }
    
};

const postMovies = async (req, res) => {
    try {
        const {title, year, director, duration, genre, rate, poster} = req.body

        const newMovie = await moviesPost({title, year, director, duration, genre, rate, poster})
        res
            .status(201)
            .json({message: 'Se a creado una nueva película con la siguiente informacion: ', newMovie});
    } catch (error) {
        res
            .status(500)
            .json({
                message: 'Error al cargar los datos',
                error: error.message
            });
    }
    
};




module.exports = {
    getMovies,
    postMovies
}