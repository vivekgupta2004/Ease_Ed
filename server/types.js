const zod=require("zod");



const loginVerification=zod.object({
    username:zod.string(),
    email:zod.string().min(1,{message:"This need to be filled!!"}).email(),
    password:zod.string()
})




const superLoginVerification = zod.object({
    username:zod.string(),
    email:zod.string().min(1,{message:"This need to be filled!!"}).email(),
    password:zod.string(),



})

const elementSchema=zod.string();

const addClassVerification=zod.object({
    className:zod.string(),
    email:zod.string().min(1,{message:"This need to be filled!!"}).email(),
    accessGrant:zod.array(elementSchema)
})



module.exports={
    loginVerification:loginVerification,
    superLoginVerification,
    addClassVerification
}