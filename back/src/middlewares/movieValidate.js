module.exports = (req, res, next) => {
    const {title, year, director, duration, genre, rate, poster} = req.body;
    if(!title) {
        throw  Error('Desde Middleware: Falta el Título')
    }
    if(year < 1895) {
        throw Error('Desde Middleware: El año de la película no es válido')
    }
    next()
}