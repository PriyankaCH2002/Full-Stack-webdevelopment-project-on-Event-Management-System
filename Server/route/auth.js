const express= require('express');
const userDetails = require('../Models/Users');
const LoginDetails=require('../Models/Logins');
const eventDetails = require('../Models/AddEvents');

const app=express();
const router=express.Router();
const bcryptjs=require('bcryptjs');

router.post('/register', async(req,res)=>{
    try{
    console.log(req.body);
    const hashpassword=await bcryptjs.hash(req.body.password, 10)
    const theUser=await userDetails.create({
        username:req.body.username,
        password:req.body.password
    })
    console.log(theUser);
    res.json({username:theUser.username})
   // console.log('Inside backend register part');
   // const message=await "sendong from backend";
    //res.json({message});
   }
    catch(e){
    console.log(e);
}
})

router.post('/login', async(req,res)=>{
    try{
    console.log(req.body);
    const hashpassword=await bcryptjs.hash(req.body.password, 10)
    const loginUser=await LoginDetails.create({
        username:req.body.username,
        password:req.body.password
    })
    console.log(loginUser);
    res.json({username:loginUser.username})
   // console.log('Inside backend register part');
   // const message=await "sendong from backend";
    //res.json({message});
   }
    catch(e){
    console.log(e);
}
})

router.post('/addEvent', async(req,res)=>{
    try{
    console.log(req.body);
    const theEvent=await eventDetails.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        category: req.body.category,
        capacity: req.body.capacity,
        registrationDeadline: req.body.registrationDeadline,
        specialRequirements: req.body.specialRequirements
    })
    console.log(theEvent);
    res.json({title:theEvent.title})
   // console.log('Inside backend register part');
   // const message=await "sendong from backend";
    //res.json({message});
   }
    catch(e){
    console.log(e);
}
})

module.exports=router
