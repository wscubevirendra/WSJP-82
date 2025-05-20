const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    contact: {
        type: String,
        unique: true,
    }
},
    {
        timestamps: true
    }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;