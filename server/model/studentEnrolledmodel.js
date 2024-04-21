const mongoose = require('mongoose')

const studentEnrolledSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    score:{
        type:Number,
        default:0
    }
})
module.exports= mongoose.model("StudentEnrolled",studentEnrolledSchema);

