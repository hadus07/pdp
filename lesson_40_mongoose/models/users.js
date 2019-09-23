const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    date_created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Users', usersSchema)
