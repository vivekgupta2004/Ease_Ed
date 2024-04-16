const zod=require("zod");

const loginVerification=zod.object({
    name:zod.string(),
    email:zod.string().min(1,{message:"This need to be filled!!"}).email()
})
module.exports={
    loginVerification:loginVerification
}