const axios = require('axios')

async function getMovies(url, searchText) {
    try {
        const { data } = await axios.get(url)
        console.log(data)
        if(searchText.length > 0) {
            const dataMovies = data.filter( dat => dat.title.toLowerCase().includes(searchText.toLowerCase()))
            return dataMovies
        } else {
            return data
        }
    } 
    catch({message}) {
        alert(message)
    }
}

module.exports = { getMovies }