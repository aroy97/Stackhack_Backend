const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    profilepic: { type: String, required: true },
    sessionToken: { type: String, required: true },
    lastLoggedIn: {type: Date }
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;