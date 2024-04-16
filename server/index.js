const express=require("express");
const {loginVerification}=require("./types.js")
const app=express();
app.use(express.json());



//Home page Route:::
app.get("/",(req,res)=>{
    res.json({
        mssg:"Jai Shri Ram!!"
    });
})




//Login page Route:::
app.post("/login",(req,res)=>{
    const userPayload=req.body;
    const parsedPayload= loginVerification.safeParse(userPayload);
    if(!parsedPayload.success){
        res.json({
            mssg:"Entered something wrong!!"
        })
        return;
    }
    else{
        res.json({
            mssg:"Everything is fine!!"
        })
    }
})






app.listen(3000,()=>{
    console.log("Server is UP!!");
})