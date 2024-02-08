const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    age: Number,
    gender: String,
    country: String,
    email: String,
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)