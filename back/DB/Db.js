const mongoose = require('mongoose');
 

mongoose.connect('mongodb://127.0.0.1:27017/ad-00-01', {useNewUrlParser :  true})


const db = mongoose.connection


db.once('open' ,  () =>{ console.log("Successfully Connected With MongoDB")})
db.on('error' ,  ()=>{console.log("Not Connected With Database")})




module.exports =  db