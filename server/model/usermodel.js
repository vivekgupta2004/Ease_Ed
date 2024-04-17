const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,


    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },


}, {
    timestamps: true
})
const superUserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,


    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    classes:{
        type:Object,
        default:null
    }


}, {
    timestamps: true
})
const User = mongoose.model('User', userSchema)
const SuperUser = mongoose.model('SuperUser', superUserSchema)
module.exports = {
    User: User,
    SuperUser
}