const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    age: Number,
    name: String,
    image: Buffer,
    gender: String,
    password: String,
    username: String,
    date_created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Users', usersSchema)
