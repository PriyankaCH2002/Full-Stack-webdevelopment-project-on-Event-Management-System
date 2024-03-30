const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/EventManagement')
.then(() => console.log('connected'))
.catch(()=> console.log('not connected'))