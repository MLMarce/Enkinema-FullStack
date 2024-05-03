const dbConfig = require('./src/config/dbCon')
const app = require('./src/server')
const PORT = 3000

dbConfig()
    .then(
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`)
        })
    )
    .catch(error => console.log(error))