const express = require('express');
const { getMovies, postMovies } = require('../controllers/controllerMovies');
const movieValidate = require('../middlewares/movieValidate');
const routerMovies = express.Router();

routerMovies.get('/', getMovies)
routerMovies.post('/', movieValidate, postMovies)

routerMovies.use((err, req, res, next) => {
    if(err) res.status(500).json({
        message:'Ha ocurrido un error',
        error: err.message
    })
})


module.exports = routerMovies