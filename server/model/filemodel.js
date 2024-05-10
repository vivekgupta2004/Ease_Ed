const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    title:{
        type:[String]
    },
    email:{
        type:String
    },
    classid:{
        type:String
    }

},{ timestamps: true })

const Files = mongoose.model("Files", fileSchema);
module.exports={
    Files
}
