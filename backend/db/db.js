const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.DBCONNECTION).then(()=>{
        console.log("database is connected")
    })
}

module.exports = connectToDB