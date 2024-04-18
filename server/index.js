const express=require("express");
const {loginVerification, superLoginVerification, addClassVerification}=require("./types.js")
const {connectDB}=require('./db/index.js')
const {User}=require("./model/usermodel.js")
const { v4: uuidv4 } = require('uuid');
const {SuperUser, AddClass}=require("./model/usermodel.js")

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






app.post("/loginsuperuser", async(req,res)=>{
    const userPayload=req.body;
    const parsedPayload= superLoginVerification.safeParse(userPayload);
    if(!parsedPayload.success){
        res.json({
            mssg:"Entered something wrong superlogin!!"
        })
        return;
    }
    else{
        const finding=await SuperUser.find({
            email:parsedPayload.data.email
        })
        if(finding.length){
            console.log("User already exist!!");
        }
        else{
            console.log("User Created successfull!!")
            await SuperUser.create([{
                email:parsedPayload.data.email,
                username:parsedPayload.data.username,
                password:parsedPayload.data.password,
            }])
        }
        res.status(200).json({
            mssg:"Collection created successfully for superlogin!!"
        })
    }
})




app.post("/addClass",async(req,res)=>{
    const addClassPayload=req.body;
    const addClassParsedPayload=addClassVerification.safeParse(addClassPayload);
    
    console.log(addClassParsedPayload);
    if(!addClassParsedPayload.success){
        res.json({
            mssg:"Entered something wrong addclass!!"
        })
        return;
    }
    else{

        const classId=uuidv4();
        console.log(classId);
        const classData={
            className:addClassParsedPayload.data.className,
            accessGrant:addClassParsedPayload.data.accessGrant,
            classid:classId
        }
        await SuperUser.updateOne({email:addClassParsedPayload.data.email},{$set: {classes:{classData}}})
        res.status(200).json({
            mssg:"Collection created successfully for add class!!"
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

