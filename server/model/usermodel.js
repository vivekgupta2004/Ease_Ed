import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,


    },
    isAdmin:{
        type:Boolean,
        default:false
    },


})
const user = mongoose.model('user',userSchema)
module.exports={
    user:user
}