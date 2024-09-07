const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   
    mobile:Number,
    password:String,
    name:String
});


module.exports =  mongoose.model("users",userSchema);