const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routerMovies = require('./routes/routerMovies')
const routerHome = require('./routes/routerHome')

const app = express()

app.use('/', morgan("dev"))

//* Convertir JSON a Objetos JS
app.use(express.json());

//* CORS
app.use(cors());

app.use('/movies', routerMovies)
app.use('/', routerHome)


module.exports = app