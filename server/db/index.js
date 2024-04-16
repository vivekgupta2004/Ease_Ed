const mongoose = require('mongoose')
 
const connectDB = async () => {
    const mongoURI="mongodb+srv://sambhavsharma936:zUeHngplxMRcOGWm@devdynastyuser.itsal9s.mongodb.net/";
    try {
        const connectionInstance = await mongoose.connect(mongoURI)
    } catch (error) {
        console.log("DB connection FAILD", error)
        
    }
}

module.exports={
    connectDB:connectDB
}