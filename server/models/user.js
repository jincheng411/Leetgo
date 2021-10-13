const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    problems: []
})
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);

module.exports = User;