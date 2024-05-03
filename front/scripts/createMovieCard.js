const { playMovie } = require('./playMovie')

//* funcion para crear las tarjetas de las peliculas con sus respectivos datos
function createMovieCard({ director, genre, duration, poster, rate, title, year, src }) {

    const cardMovie = document.createElement('div')
    cardMovie.className = "cardMovie"
    cardMovie.classList.add('shadow')

    cardMovie.innerHTML = `
        <img class="imgMovie" src="${poster}" alt="${title}" />
        <div class="dataMovieContainer">
            <a id="playMovie" href="#">${title}</a>
            <p><span class="span">Duración:</span> ${duration}</p>
            <p><span class="span">Director:</span> ${director}</p>
            <p><span class="span">Año:</span> ${year}</p>
            <p><span class="span">Género:</span> ${genre.join(', ')}</p>
            <p><span class="span">Puntuación:</span> ${rate}</p>
        </div>
    `
    cardMovie.addEventListener('click', () => {
        playMovie(src, title)
    })
    return cardMovie
}

module.exports = { createMovieCard }