const express=require("express");
const {loginVerification}=require("./types.js")
const {connectDB}=require('./db/index.js')
const {User}=require("./model/usermodel.js")
const app=express();



app.use(express.json());


//Home page Route:::
app.get("/",(req,res)=>{
    res.json({
        mssg:"Jai Shri Ram!!"
    });
})




//Login page Route:::
app.post("/login",async (req,res)=>{
    const userPayload=req.body;
    const parsedPayload= loginVerification.safeParse(userPayload);
    if(!parsedPayload.success){
        res.json({
            mssg:"Entered something wrong!!"
        })
        return;
    }
    else{
        console.log(parsedPayload);
        await User.create([{
            email:parsedPayload.data.email,
            username:parsedPayload.data.username,
            password:parsedPayload.data.password,
        }])
        res.status(200).json({
            mssg:"Collection created successfully!!"
        })
    }
})



connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server is UP!!");
    })
})
.catch((e)=>{
    console.log("DB connection failed!!");
})

