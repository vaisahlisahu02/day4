const mongoose = require('mongoose')


function connect(){
    mongoose.connect("mongodb://localhost:27017/BE-3")
    .then(()=>{
        console.log("DB connect")
    })
.catch((err)=>{
    console.log("Error ")
})
}


module.exports = connect;