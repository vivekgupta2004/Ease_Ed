const mongoose =require("mongoose");


const timeTableSchema=mongoose.Schema({
    classid:{
        type:String
    },
    classTimeTable:{
        type:Array
    }
})

const classTimeTableModel=mongoose.model('classTimeTable',timeTableSchema);

module.exports={
    classTimeTableModel
}