const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    GoogleId: {
        type: String,
        required: true,
        unique: true,
    },
    Name : {
        type: String,
        required: true,
    },
    Email :{
        type: String,
        required: true,
        unique: true,
    },
    Token : {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    }
});


export const User = mongoose.models.User || mongoose.model('User', UserSchema);