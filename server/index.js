const express=require("express");
const {loginVerification, superLoginVerification, addClassVerification}=require("./types.js")
const {connectDB}=require('./db/index.js')
const {User}=require("./model/usermodel.js")
const { v4: uuidv4 } = require('uuid');
const {SuperUser, AddClass}=require("./model/usermodel.js")
const jwt=require("jsonwebtoken")
const cookieparser=require("cookie-parser");
const app=express();

app.use(cookieparser());

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
        const token= jwt.sign({email:parsedPayload.data.email},"shhhh");

        const options={
            expires:new Date(Date.now() +3*24*60*60*1000),
            httpOnly:true
        }
        await User.create([{
            email:parsedPayload.data.email,
            username:parsedPayload.data.username,
            password:parsedPayload.data.password,
            token:token
        }])
        res.status(200).cookie("token",token,options).json({
            mssg:"Collection created successfully!!",
            success:true,
            token
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
        const dumyData={
            0:{
                title:"Go to Gym!!",
                status:0
            }, 
            1:{
                title:"Go to Gym!!",
                status:0
            }, 
            2:{
                title:"Go to Gym!!",
                status:0
            }, 
            3:{
                title:"Go to Gym!!",
                status:0
            }, 
            4:{
                title:"Go to Gym!!",
                status:0
            }, 
            5:{
                title:"Go to Gym!!",
                status:0
            }, 
            6:{
                title:"Go to Gym!!",
                status:0
            },
        }
        console.log(classId);
        
        const classData={
            className:addClassParsedPayload.data.className,
            accessGrant:addClassParsedPayload.data.accessGrant,
            classid:classId,
            classtimetable:dumyData
        }
        await SuperUser.updateOne({email:addClassParsedPayload.data.email},{$push: {classes:classData}})
        res.status(200).json({
            mssg:"Collection created successfully for add class!!"
        })

    }
    


})



app.post("/enrollclass",async (req,res)=>{
    const payloadclassid=req.body.classid;
    const payloademail=req.body.email;
    const temp=await SuperUser.findOne({"classes.classid":payloadclassid});
    const timetableobj=(temp.classes).map((c)=>{
        if(c.classid==payloadclassid){
            return c.classtimetable;
        }
    })
    console.log(timetableobj);

    await User.updateOne({email:payloademail},{classTimeTable:timetableobj[0]});
    res.json({
        mssg:"Enrolled successfully!! time table added to a particular student database!!"
    })
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

