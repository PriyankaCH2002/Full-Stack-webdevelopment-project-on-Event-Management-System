const mongoose= require('mongoose')

const EventSchema= new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    time: String,
    location: String,
    category: String,
    capacity: Number,
    registrationDeadline: Date,
    specialRequirements: String
})


const eventDetails= mongoose.model("events", EventSchema)
module.exports=eventDetails;

