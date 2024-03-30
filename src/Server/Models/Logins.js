const mongoose= require('mongoose')

const LoginSchema= new mongoose.Schema({
    username:String,
    password:String
}) 

const LoginDetails= mongoose.model("Login", LoginSchema)
module.exports=LoginDetails;
