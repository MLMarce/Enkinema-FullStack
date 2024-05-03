const axios = require("axios")

const validateMovie = ({title, year, director, duration, genre, rate, poster}) => {
    if(!title || !year || !director || !duration || !genre[0] || !rate || !poster) {
        return 'Todos los campos deben ser completados'
    }
    if(director.length <= 5) return 'El director debe tener mas de 5 caracteres'

    if(typeof year !== 'number' || year < 1895 || year > 2024) return 'El año de estreno debe ser un número mayor o igual a 1895 y menor o igual al año actual'
    if(typeof rate !== 'number' || rate < 1 || rate > 10) return 'La puntuación debe ser un número entre 1 y 10'
}

const resetInputs = () => {
    const allInputs = document.querySelectorAll('input')

    allInputs.forEach(element => {
        element.value = ''
    })
}





const addMovie = async () => {
    console.log('hiciste click ')

    let title = document.querySelector('.titleMovie').value
    let year = document.querySelector('.yearMovie').value
    let director = document.querySelector('.directorMovie').value
    let duration = document.querySelector('.durationMovie').value
    let genre = document.querySelector('.genreMovie').value.split(' ')
    let rate = document.querySelector('.rateMovie').value
    let poster = document.querySelector('.posterMovie').value

    year = parseInt(year)
    rate = parseFloat(rate)

    const movieToPush = {title, year, director, duration, genre, rate, poster}
    console.log(movieToPush)

    const error = validateMovie(movieToPush)

    if(error) return alert(error)
    
    await axios.post('http://localhost:3000/movies', movieToPush)
    .then(res => {
        resetInputs()
        alert('Película agregada correctamente 🤗')
        return console.log(res)
    })
    .catch(error => console.log(error.message))
    
}

module.exports = {
    addMovie,
    resetInputs
}