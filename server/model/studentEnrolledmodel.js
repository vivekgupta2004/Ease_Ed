const mongoose = require('mongoose')

const studentEnrolledSchema = new mongoose.Schema({
    score:{
        type:Array,
        default:null
    },
    classid:{
        type:String,
        default:null
    },
    studentsInThisClass:{
        type:Array,
        default:null
    },
})
module.exports= mongoose.model("StudentEnrolled",studentEnrolledSchema);

