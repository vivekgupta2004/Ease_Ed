const mongoose = require("mongoose");
const {Schema, ObjectId} = require('mongoose');
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
    classTimeTable:{
        type:Object,
        default:null
    },
    token:{
        type:String,
        default:null
    },
    score:{
        type:Number,
        default:0
    }
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
        type:Array,
        default:null
    },
    studentEnrolled:[
        {
            type:Schema.Types.ObjectId,
            ref: 'Studentenrolleds'
        }
    ] 
    

}, {
    timestamps: true
})
const User = mongoose.model('User', userSchema)
const SuperUser = mongoose.model('SuperUser', superUserSchema)







module.exports = {
    User: User,
    SuperUser,
    
}