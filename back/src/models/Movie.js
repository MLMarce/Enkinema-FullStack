const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: {
        type : String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        min: [1895, `No hay películas previo a {VALUE}`],
        max:[2024, 'El año no puede ser superior al año en curso']
    },
    director: {
        type : String,
        required: true
    },
    duration: {
        type: String
    },
    genre:{
        type: [String]
    },
    rate: {
        type: Number
    },
    poster:{
        type : String,
        //*custom validator 
        validate: (input) => {
            return input.includes('http://') || input.includes('https://')
        },
        required: true
    },
    src: {
        type: String,
        //*custom validator 
        validate: (input) => {
            return input.includes('http://') || input.includes('https://')
        }
    } 
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie