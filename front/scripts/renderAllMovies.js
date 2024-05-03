
const { getMovies } = require('./getMovies')
const { createMovieCard } = require('./createMovieCard')


const url = 'http://localhost:3000/movies' 



const sectionMovies = document.getElementById('allMovies')
const inputSearch = document.getElementById('searchInput')

async function renderAllMovies() {
    sectionMovies.innerHTML = ''
    //? con axios
    let value = inputSearch?.value
    const allMovies = await getMovies(url, value)
    let cardsMovie =  allMovies.map((movie) => 
        createMovieCard(movie))

    cardsMovie.forEach(element => {
        sectionMovies?.appendChild(element)
    });
}

module.exports = {renderAllMovies, inputSearch}