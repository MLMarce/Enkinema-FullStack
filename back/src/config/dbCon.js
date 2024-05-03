const mongoose = require('mongoose')
require('dotenv').config()

const ATLAS_URI = process.env.ATLAS_URI

const dbConfig = async () => {
    await mongoose.connect(ATLAS_URI)
}

module.exports = dbConfig