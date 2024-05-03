const { resetInputs, addMovie } = require('./addMovie');
const { handleNavMenu } = require('./handleNavMenu')
const { renderAllMovies, inputSearch }= require('./renderAllMovies')


handleNavMenu()
renderAllMovies()


inputSearch?.addEventListener('input', renderAllMovies);

const addMovieBtn = document.querySelector('.addMovie')
const resetBtn = document.querySelector('.resetInputs')

addMovieBtn?.addEventListener('click', addMovie)

resetBtn?.addEventListener('click', resetInputs)

