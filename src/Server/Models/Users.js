const mongoose= require('mongoose')

const UserSchema= new mongoose.Schema({
    username:String,
    password:String
})


const userDetails= mongoose.model("users", UserSchema)
module.exports=userDetails;

