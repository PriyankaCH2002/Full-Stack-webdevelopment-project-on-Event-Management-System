const express= require('express');
const app=express();

const port=3200;
require('./db')
const cors=require('cors');
const userDetails = require('./Models/Users');
const LoginDetails=require('./Models/Logins');
const eventDetails=require('./Models/AddEvents');
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'))
app.get('/register',(req, res)=>{
    res.send('<h1>Hello world </h1>')
})

app.post('/login',(req, res)=>{
    //res.send('<h1>Hello world </h1>')
    const {username, password}=req.body;
    userDetails.findOne({username:username})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("successful")
            }
            else{
                res.json("password is incorrect")
            }
           
        } else{
            res.json("no records existed")
        }
})
})


app.get('/addEvent',(req, res)=>{
    res.send('<h1>Hello world </h1>')
    
})




    
app.listen(port, () =>{
    console.log(`server is listenting at port :${port}`)
})