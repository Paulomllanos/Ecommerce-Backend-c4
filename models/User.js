const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
    isAdmin: Boolean
})

const User = mongoose.model('user', userSchema);

module.exports = User;